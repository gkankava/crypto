import React, { useState, useEffect } from "react";
import { VscClose } from "react-icons/vsc";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import RePasswordForm from "./RePasswordForm";

import { userProvider } from "../../../store/user/auth";
import { modalProvider } from "../../../store/modal_state/modalState";

import playStore from "../../../assets/icons/play-store.svg";
import appStore from "../../../assets/icons/app-store.svg";

function AuthModal({ type }) {
  const { setAuthModalState } = modalProvider();
  const [authType, setAuthType] = useState(type);
  const [rePasswordActive, setRePasswordActive] = useState(false);

  const _closeModal = () => setAuthModalState(false, null);

  useEffect(() => {
    setRePasswordActive(false);
  }, [authType]);

  const { setCurrentUser } = userProvider();

  return (
    <div className="auth-modal" onClick={_closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <VscClose
          className="close-btn"
          size={35}
          color="#1e99e5"
          onClick={_closeModal}
        />
        <div className="left">
          <div className="top-container">
            <h3>Download our app</h3>
            <p>Cryptoiex is available on Web, iPhone, iPad, Android.</p>
            <div className="icon-container">
              <img src={playStore} alt="play-store-icon" />
              <img src={appStore} alt="app-store-icon" />
            </div>
          </div>
          {authType === "signup" && (
            <div className="rules-container">
              <ul>
                <li>A minimum of 1 lower case letter [a-z] and</li>
                <li>A minimum of 1 upper case letter [A-Z] and</li>
                <li>A minimum of 1 numeric character [0-9] and</li>
              </ul>
              <p>Name must be at least 2 characters in length.</p>
              <p>Passwords must be at least 8 characters in length.</p>
            </div>
          )}
        </div>
        <div className="right">
          <div className="tab-nav">
            {rePasswordActive ? (
              <span className="tab-active">Reset Password</span>
            ) : (
              <span
                className={authType === "signin" ? "tab-active" : null}
                onClick={() => setAuthType("signin")}
              >
                Login
              </span>
            )}
            <span
              className={authType === "signup" ? "tab-active" : null}
              onClick={() => setAuthType("signup")}
            >
              Sign Up
            </span>
          </div>
          <div className="form-container">
            {authType === "signin" && rePasswordActive === false ? (
              <LoginForm
                resetPassword={setRePasswordActive}
                setCurrentUser={setCurrentUser}
                closeModal={_closeModal}
              />
            ) : authType === "signin" && rePasswordActive === true ? (
              <RePasswordForm closeModal={_closeModal} />
            ) : (
              <SignupForm closeModal={_closeModal} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
