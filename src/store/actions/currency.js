import { apiCall } from "../../services/api";

export const fetchCurrencyPrice = (callback) => {
  return new Promise((resolve, reject) => {
    return apiCall("get", `https://blockchain.info/ticker`)
      .then((data) => {
        callback(data.EUR.last, data.USD.last);
        resolve();
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
