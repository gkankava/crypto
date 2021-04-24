import React from "react";
import { Link, NavLink } from "react-router-dom";

import Hamburger from "./Hamburger";
import logo from "../../assets/images/logos/ciex-logo.svg";
import arrow from "../../assets/icons/arrow.svg";

import { navLinks } from "./links";

function Navbar({ currentUser, logout, cb }) {
  const protectedNavItems = navLinks.user.map((item, key) => (
    <li key={key}>
      <NavLink
        to={item.path}
        activeClassName={"nav-link-active"}
        className={"nav-item"}
        onClick={() => setNavActive(false)}
      >
        {item.title}
      </NavLink>
    </li>
  ));

  const companyNavItems = navLinks.company.map((item, key) => (
    <li key={key}>
      <NavLink
        to={item.path}
        activeClassName="nav-link-active"
        className="nav-item"
        onClick={() => {
          setNavActive(false);
          setCompHover(false);
        }}
      >
        {item.title}
      </NavLink>
    </li>
  ));
  const feesNavItems = navLinks.fees.map((item, key) => (
    <li key={key}>
      <NavLink
        to={item.path}
        activeClassName="nav-link-active"
        className="nav-item"
        onClick={() => {
          setNavActive(false);
          setFeesHover(false);
        }}
      >
        {item.title}
      </NavLink>
    </li>
  ));

  const defMenuMobileItems = navLinks.company
    .concat(navLinks.faq)
    .map((item, key) => {
      return (
        <li key={key}>
          <NavLink
            to={item.path}
            activeClassName="nav-link-active"
            className="nav-item"
            onClick={() => {
              setNavActive(false);
              setFeesHover(false);
            }}
          >
            {item.title}
          </NavLink>
        </li>
      );
    });

  const logOut = () => {
    logout(() => {
      cb(false, null);
    });
  };

  const [navActive, setNavActive] = React.useState(false);
  const [compHover, setCompHover] = React.useState(false);
  const [feesHover, setFeesHover] = React.useState(false);

  return (
    <nav className="container">
      <Link to="/">
        <img src={logo} alt="cryptoiex.io logo" />
      </Link>
      <div className="nav-container">
        {/* left */}
        <div className="nav-menu-container">
          <div className="nav-list-item">
            <div
              className="drop-down-menu"
              onMouseEnter={() => setCompHover(true)}
              onMouseLeave={() => setCompHover(false)}
            >
              <span>
                Company
                <img
                  className={compHover ? "arrow-rotate" : null}
                  src={arrow}
                  alt="arrow-ico"
                />
              </span>
              <ul
                className={`drop-down-menu-content ${
                  compHover ? "drop-down-active" : null
                }`}
              >
                <div className="cont">{companyNavItems}</div>
              </ul>
            </div>
          </div>
          {currentUser.isAuthenticated && (
            <div className="nav-list-item">
              <div
                className="drop-down-menu"
                onMouseEnter={() => setFeesHover(true)}
                onMouseLeave={() => setFeesHover(false)}
              >
                <span>
                  Fees{" "}
                  <img
                    className={feesHover ? "arrow-rotate" : null}
                    src={arrow}
                    alt="arrow-ico"
                  />
                </span>
                <ul
                  className={`drop-down-menu-content ${
                    feesHover ? "drop-down-active" : null
                  }`}
                  style={{ minWidth: "280px" }}
                >
                  <div className="cont">{feesNavItems} </div>
                </ul>
              </div>
            </div>
          )}

          <div className="nav-list-item">
            <NavLink
              to="/faq"
              activeClassName="nav-link-active"
              className="nav-item"
              onClick={() => setNavActive(false)}
            >
              F.A.Q.
            </NavLink>
          </div>
          {currentUser.isAuthenticated && (
            <div className="nav-list-item">
              <NavLink
                to="/support"
                activeClassName="nav-link-active"
                className="nav-item"
                onClick={() => setNavActive(false)}
              >
                Support
              </NavLink>
            </div>
          )}
          {!currentUser.isAuthenticated && (
            <div className="nav-list-item">
              <button className="login-btn">Login</button>
            </div>
          )}
        </div>
        {/* right */}
        {/* {currentUser.isAuthenticated && ( */}
        <div
          className={`nav-user-container ${navActive && "nav-active"} ${
            !currentUser.isAuthenticated && "logged-false"
          }`}
        >
          <div
            className="backdrop"
            onClick={() => {
              setNavActive(false);
            }}
          />
          <div className="inner-container">
            {currentUser.isAuthenticated ? (
              <>
                <span className="label">
                  Hello, {currentUser.user.username}
                </span>
                <ul>
                  {protectedNavItems}
                  <li>
                    <span
                      className="nav-item"
                      onClick={() => {
                        setNavActive(false);
                        logOut();
                      }}
                    >
                      Log Out
                    </span>
                  </li>
                </ul>
              </>
            ) : (
              <ul>
                {defMenuMobileItems}
                <li>
                  <span
                    className="nav-item"
                    onClick={() => {
                      setNavActive(false);
                      logOut();
                    }}
                  >
                    Log In
                  </span>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* )} */}
      </div>
      <Hamburger burgerStatus={navActive} setBurgerStatus={setNavActive} />
      {/* default Moblile menu (side drawer) */}
    </nav>
  );
}

export default Navbar;
