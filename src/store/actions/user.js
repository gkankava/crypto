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
        console.log(err);
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
      });
  });
}

export function changePassword(data, toast, setSubmitting) {
  return new Promise((resolve, reject) => {
    return apiCall("POST", "https://testapi.cryptoiex.io/api/user/changepass", {
      ...data,
    })
      .then((res) => {
        console.log(res);
        setSubmitting(false);
        toast("Password has been changed", toaster.info);
      })
      .catch((err) => {
        console.log(err);
        toast(err, toaster.error);
        setSubmitting(false);
      });
  });
}

export function enable2Fa(code, toast) {
  return new Promise((resolve, reject) => {
    return apiCall(
      "POST",
      "https://testapi.cryptoiex.io/api/user/enable2fa",
      code
    )
      .then((res) => {
        console.log(res);
        toast("Successfully enabled 2FA", toaster.info);
      })
      .catch((err) => {
        console.log(err);
        toast("invalid code", toaster.error);
      });
  });
}
