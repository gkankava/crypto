import { apiCall } from "../../services/api";
import * as toaster from "../../components/shared/toastrConfig";

export const makeOrder = (data, callback) => {
  return new Promise((resolve, reject) => {
    return apiCall(
      "post",
      `https://testapi.cryptoiex.io/api/create-order/BTCEUR/sell`,
      data
    )
      .then((data) => {
        console.log(data);
        callback(data);
        resolve();
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
export const confirmOrder = (id, toast) => {
  return new Promise((resolve, reject) => {
    return apiCall(
      "post",
      `https://testapi.cryptoiex.io/api/confirmOrder/${id}`
    )
      .then((data) => {
        toast("Transaction Completed Successfully", toaster.success);
        resolve();
      })
      .catch((err) => {
        toast("Transaction is not valid", toaster.error);
        console.log(err);
      });
  });
};
