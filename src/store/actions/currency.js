import { apiCall } from "../../services/api";

export const fetchCurrencyPrice = (callback) => {
  return new Promise((resolve, reject) => {
    // return apiCall("get", `https://blockchain.info/ticker`)
    return apiCall("get", `https://testapi.cryptoiex.io/api/getprices`)
      .then((data) => {
        callback(data.EUR, data.USD);
        resolve();
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
