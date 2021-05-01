import { apiCall } from "../../services/api";

export const fetchPage = (path, callback) => {
  return new Promise((resolve, reject) => {
    return apiCall("get", `/api/${path}`)
      .then((data) => {
        callback(data);
        resolve();
      })
      .catch((err) => {
        reject();
      });
  });
};

// export const backgroundFetch = (path, compare, callback) => {
//    return new Promise((resolve, reject) => {
//       return apiCall("get", `https://testapi.cryptoiex.io/api/${path}`)
//          .then(data => {
//             compare(data)
//          })
//    })
// }