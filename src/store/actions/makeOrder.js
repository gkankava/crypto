import { apiCall } from "../../services/api";

export const makeOrder = (data, callback) => {
  return new Promise((resolve, reject) => {
    return apiCall(
      "post",
      `https://testapi.cryptoiex.io/api/create-order/BTCEUR/sell`,
      data
    )
      .then((data) => {
        console.log(data);
        resolve();
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
