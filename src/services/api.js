import axios from "axios";

export function setTokenHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function apiCall(method, path, data) {
  let token = localStorage.jwtToken || "";
  if (path === "https://blockchain.info/ticker") {
    setTokenHeader(null);
  }
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path, data)
      .then((res) => {
        if (path === "https://blockchain.info/ticker") {
          setTokenHeader(token);
        }
        return resolve(res.data);
      })
      .catch((err) => {
        if (path === "https://blockchain.info/ticker") {
          setTokenHeader(token);
        }
        return reject(err.response.data.error);
      });
  });
}
