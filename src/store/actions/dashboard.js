import { apiCall } from "../../services/api";

export const fetchDashboardData = (callback) => {
  return new Promise((resolve, reject) => {
    return apiCall("get", `https://testapi.cryptoiex.io/api/user/dashboard`)
      .then((data) => {
        callback(data);
        resolve();
      })
      .catch((err) => {
        reject();
      });
  });
};
