import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import { setTokenHeader } from "./services/api";
import { userProvider, logout } from "./store/user/auth";
import { modalProvider } from "./store/modal_state/modalState";

import { fetchUserData } from "./store/actions/user";

import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AuthModal from "./components/shared/auth_modal/AuthModal";
import UserPanel from "./components/shared/UserPanel";

import "./styles/index.scss";

function App() {
  const { currentUser, setCurrentUser } = userProvider();
  const { authModalState } = modalProvider();

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      setTokenHeader(localStorage.jwtToken);
      try {
        fetchUserData(localStorage.jwtToken, setCurrentUser);
      } catch (err) {
        setCurrentUser(false, null);
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <ToastProvider autoDismiss={true} autoDismissTimeout={3000}>
        <div className="bg" />
        <Navbar currentUser={currentUser} logout={logout} cb={setCurrentUser} />
        {currentUser.isAuthenticated && <UserPanel />}
        <Main />
        <Footer />
        {/* cookies -- localstorage */}
        {authModalState.activeState && <AuthModal type={authModalState.type} />}
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
