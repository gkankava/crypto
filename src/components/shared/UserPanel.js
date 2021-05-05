import React from "react";
import { Link } from "react-router-dom";

import eurIco from "../../assets/icons/eur-ico.svg";
import btcIco from "../../assets/icons/btc-ico.svg";
import depositIco from "../../assets/icons/deposit-ico.svg";
import withdrawIco from "../../assets/icons/withdraw-ico.svg";

function UserPanel({ eur = 0, btc = 0 }) {
  return (
    <div className="user-panel">
      <div className="container user-panel-container">
        <div className="info-area">
          <span>
            <img src={eurIco} alt="euro icon" />
            EUR: {eur}
          </span>
          <span>
            <img src={btcIco} alt="btc icon" />
            BTC: {btc}
          </span>
        </div>
        <div className="buttons-area">
          <Link to="/wallet">
            <button>
              <img src={depositIco} alt="deposit icon" /> Deposit
            </button>
          </Link>
          <Link to="/withdraw">
            <button>
              <img src={withdrawIco} alt="withdraw icon" />
              Withdraw
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
