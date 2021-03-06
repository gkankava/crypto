import React, { useState, useEffect } from "react";
import * as Onfido from "onfido-sdk-ui";

function Init() {
  const [loading, setLoading] = useState(false);
  const [onfidoInstance, setOnfidoInstance] = useState(null);

  const initOnfido = async () => {
    try {
      setLoading(true);
      const token = await getToken();

      const instance = Onfido.init({
        useModal: false,
        token,
        onComplete: (data) => {
          console.log("Everything is complete", data);
        },
        steps: [
          {
            type: "welcome",
            options: {
              title: "Open your new bank account",
            },
          },
          "document",
          "face",
          "complete",
        ],
      });

      setOnfidoInstance(instance);
      setLoading(false);
    } catch (err) {
      console.log("err:", err.message, err.request);
    }
  };

  useEffect(() => {
    initOnfido();
    return () => {
      console.log("tear down", onfidoInstance);
      onfidoInstance && onfidoInstance.tearDown();
    };
  }, []);

  return (
    <div className="container">
      <div id="onfido-mount">{loading && <div>Loading...</div>}</div>
    </div>
  );
}

export default Init;

const getToken = () =>
  new Promise((resolve, reject) => {
    const url = "https://token-factory.onfido.com/sdk_token";

    const onRequestError = (request) => {
      const error = new Error(`Request failed with status ${request.status}`);
      Object.assign(error, { request });
      reject(error);
    };

    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader(
      "Authorization",
      `BASIC api_sandbox.RdoxmtVY1ap.pU06F3I0DeZxv5Xwpn7l7zi_33BiU6wA`
    );
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.responseText);
        resolve(data.message);
      } else {
        onRequestError(request);
      }
    };
    request.onerror = () => onRequestError(request);
    request.send();
  });
