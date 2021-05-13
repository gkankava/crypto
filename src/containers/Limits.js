import React from "react";
import { Link } from "react-router-dom";

function Limits() {
  return (
    <section id="limits" className="container">
      <h1>Limits and Commissions</h1>
      <div className="content-wrapper">
        <div className="header-wrapper">
          <span>Limits</span>
          <span>Daily deposit</span>
          <span>Daily withdrawal</span>
        </div>
        <div className="separator" />
        <div className="wrapper">
          <div className="details">
            <h3>Starter</h3>
            <p>
              Make deposits totaling $100 for the account lifetime, withdrawals
              - up to $100 daily.
            </p>
          </div>
          <div className="inwr">
            <span className="optional">Daily deposit</span>
            <span>$100.00</span>
          </div>
          <div className="inwr">
            <span className="optional">Daily withdrawal</span>
            <span>$100.00</span>
          </div>
          <Link to="/verification">
            <button>Increase Limit</button>
          </Link>
        </div>
        <div className="separator" />
        <div className="wrapper">
          <div className="details">
            <h3>Intermediate</h3>
            <p>
              Level up your daily limits: deposits — up to $3,000.00,
              withdrawals — up to $10,000.00.
            </p>
          </div>
          <div className="inwr">
            <span className="optional">Daily deposit</span>
            <span>$3,000.00</span>
          </div>
          <div className="inwr">
            <span className="optional">Daily withdrawal</span>
            <span>$10,000.00</span>
          </div>
          <Link to="/verification">
            <button>Increase Limit</button>
          </Link>
        </div>
        <div className="separator" />
        <div className="wrapper">
          <div className="details">
            <h3>Advanced</h3>
            <p>
              Unlock bank transfers and get advanced daily limits: deposits — up
              to $10,000.00, withdrawals — up to $30,000.00.
            </p>
          </div>
          <div className="inwr">
            <span className="optional">Daily deposit</span>
            <span>$10,000.00</span>
          </div>
          <div className="inwr">
            <span className="optional">Daily withdrawal</span>
            <span>$30,000.00</span>
          </div>
          <Link to="/verification">
            <button>Increase Limit</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Limits;
