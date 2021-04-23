import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { userProvider, logout } from "./store/user/auth";
import "./styles/index.scss";

import Navbar from "./components/navbar/Navbar";
import { setTokenHeader } from "./services/api";
import jwtDecode from "jwt-decode";

function App() {
  const { currentUser, setCurrentUser } = userProvider();

  useEffect(() => {
    localStorage.setItem(
      "jwtToken",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvcmprIiwiaWQiOjE1MTYyMzkwMjJ9.P916lB8fRqSazXWMauDPxl28l3xvXB0PmuSkSap8-Ws"
    );
    if (localStorage.getItem("jwtToken")) {
      setTokenHeader(localStorage.jwtToken);
      try {
        let decoded = jwtDecode(localStorage.jwtToken);
        setCurrentUser(true, { ...decoded });
      } catch (err) {
        setCurrentUser(false, null);
      }
    }
    // eslint-disable-next-line
  }, [localStorage]);

  return (
    <BrowserRouter>
      <div className="bg" />
      <Navbar currentUser={currentUser} logout={logout} cb={setCurrentUser} />
      {/* currentUser.isAuthenticated && <UserPanel />  */}

      {/* footer */}
      {/* cookies -- localstorage */}
    </BrowserRouter>
  );
}

export default App;
