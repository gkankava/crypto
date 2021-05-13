import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import { setTokenHeader } from "./services/api";
import { userProvider, logout } from "./store/user/auth";
import { modalProvider } from "./store/modal_state/modalState";
import { dashboardProvider } from "./store/dashboard/dashboard";
import { priceProvider } from "./store/currency/index";

import { fetchUserData } from "./store/actions/user";
import { fetchDashboardData } from "./store/actions/dashboard";
import { fetchCurrencyPrice } from "./store/actions/currency";

import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import AuthModal from "./components/shared/auth_modal/AuthModal";
import UserPanel from "./components/shared/UserPanel";

import "./styles/index.scss";

function App() {
  const { currentUser, setCurrentUser } = userProvider();
  const { authModalState } = modalProvider();
  const { setCurrentPrice } = priceProvider();

  const { dashboardData, setDashboardData } = dashboardProvider();

  useEffect(() => {
    fetchCurrencyPrice(setCurrentPrice);
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

  useEffect(() => {
    if (currentUser.isAuthenticated) {
      fetchDashboardData(setDashboardData);
    } else setDashboardData(null);
  }, [currentUser]);

  return (
    <BrowserRouter>
      <ToastProvider autoDismiss={true} autoDismissTimeout={3000}>
        <div className="bg" />
        <Navbar currentUser={currentUser} logout={logout} cb={setCurrentUser} />
        {currentUser.isAuthenticated && <UserPanel data={dashboardData} />}
        <Main />
        <Footer />
        {/* cookies -- localstorage */}
        {authModalState.activeState && <AuthModal type={authModalState.type} />}
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
