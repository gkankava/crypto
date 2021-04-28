import { apiCall, setTokenHeader } from "../../services/api";
import * as toaster from "../../components/shared/toastrConfig";

export function setAuthorizationToken(token) {
  setTokenHeader(token);
}

export const fetchUserData = (token, callback) => {
  return new Promise((resolve, reject) => {
    return apiCall("get", `https://testapi.cryptoiex.io/api/user/profile`)
      .then((data) => {
        callback(true, { ...data });
        resolve();
      })
      .catch((err) => {
        reject();
      });
  });
};

export function authUser(userData, setSubmitting, callback, toast) {
  return new Promise((resolve, reject) => {
    return apiCall(
      "post",
      `https://testapi.cryptoiex.io/api/user/login`,
      userData
    )
      .then((token) => {
        localStorage.setItem("jwtToken", token);
        setAuthorizationToken(token);
        fetchUserData(token, callback);
        toast("Logged In ", toaster.success);
        setSubmitting(false);
        resolve();
      })
      .catch((err) => {
        if (err) {
          toast(err, toaster.error);
        }
        setSubmitting(false);
        reject();
      });
  });
}

export function registerUser(userData, setSubmitting, toast) {
  return new Promise((resolve, reject) => {
    return apiCall(
      "post",
      `https://testapi.cryptoiex.io/api/user/register`,
      userData
    )
      .then((res) => {
        toast(res.message, toaster.info);
        setSubmitting(false);
        resolve();
      })
      .catch((err) => {
        toast("email is already registered", toaster.error);
        setSubmitting(false);
        reject();
      });
  });
}
