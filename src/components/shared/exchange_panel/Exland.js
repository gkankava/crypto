// import axios from "axios";
import React, { useState, useEffect } from "react";
import { CgSwapVertical } from "react-icons/cg";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { autoUpdateCurrency } from "../../../services/autoUpdateCurrency";

import { modalProvider } from "../../../store/modal_state/modalState";
import { userProvider } from "../../../store/user/auth";
import { priceProvider } from "../../../store/currency";
import { makeOrder } from "../../../store/actions/makeOrder";

function Exland({ setConfirmData }) {
  const { currentPrice, setCurrentPrice } = priceProvider();
  const [timeleft, setTimeleft] = useState(9);
  useEffect(() => {
    autoUpdateCurrency(setCurrentPrice, timeleft, setTimeleft);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    timeleft > 0 && setTimeout(() => setTimeleft(timeleft - 1), 1000);
    timeleft === 0 && setTimeout(() => setTimeleft(9), 1000);
  }, [timeleft]);

  const { setAuthModalState } = modalProvider();
  const { currentUser } = userProvider();

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [curSelector, setCurSelector] = useState({
    from: "EUR",
    to: "BTC",
  });

  const handleSwap = () => {
    setCurSelector({
      from: curSelector.to,
      to: curSelector.from,
    });
  };

  useEffect(() => {
    if (currentPrice.eur.buy !== 0) {
      if (curSelector.from === "EUR") {
        let val = from / currentPrice.eur.buy;
        setTo(parseFloat(val.toFixed(5)));
      } else {
        let val = from * currentPrice.eur.sell;
        setTo(parseFloat(val.toFixed(5)));
      }
    }
    // eslint-disable-next-line
  }, [from, curSelector]);

  useEffect(() => {
    if (currentPrice.eur.buy !== 0) {
      if (curSelector.from === "EUR") {
        let val = from / currentPrice.eur.buy;
        setTo(parseFloat(val.toFixed(5)));
      } else {
        let val = from * currentPrice.eur.sell;
        setTo(parseFloat(val.toFixed(5)));
      }
    }
    // eslint-disable-next-line
  }, [currentPrice]);

  const handleExchange = () => {
    if (currentUser.isAuthenticated) {
      let data = {
        quantity: from,
        currency_from: curSelector.from,
        currency_to: curSelector.to,
      };
      console.log(data);
      makeOrder(data, setConfirmData);
    } else {
      setAuthModalState(true, "signup");
    }
  };

  return (
    <section
      id="hero"
      style={currentUser.isAuthenticated ? { minHeight: "unset" } : {}}
    >
      {!currentUser.isAuthenticated && (
        <div className="col">
          <h1>
            <b>I</b>nstant <b>EX</b>change
          </h1>
          <p>
            We made it fast and easy. <br /> Founded in 2019 by the group of
            crypto entrepreneurs and enthusiasts, CryptoIEX is the premier
            Estonia - based blockchain platform, providing lightning-fast trade
            execution
          </p>
        </div>
      )}
      <div className="col">
        <h3 style={currentUser.isAuthenticated ? { marginBottom: "30px" } : {}}>
          Exchange
        </h3>
        <div className="exchanger-container">
          <div className="ex-input-container">
            <input
              className="exhcanger-input"
              type="number"
              name="val1"
              id="val1"
              min="0"
              max="9999999999"
              value={from}
              onChange={(event) => {
                setFrom(event.target.value);
              }}
            />
            <select name="cur-select-1" id="cur-select-1">
              <option value={curSelector.from}>{curSelector.from}</option>
            </select>
          </div>
          <div className="cont-container">
            {curSelector.from === "EUR" ? (
              <span>
                1 BTC = {parseFloat(currentPrice.eur.buy).toFixed(5)} EUR
              </span>
            ) : (
              <span>1 EUR = {currentPrice.eur.sell} BTC</span>
            )}
            <CgSwapVertical color="white" size={44} onClick={handleSwap} />
          </div>
          <div className="ex-input-container">
            <input
              className="exhcanger-input"
              type="number"
              name="val2"
              id="val2"
              min="0"
              value={to}
              disabled
            />
            <select name="cur-select-1" id="cur-select-1">
              <option value={curSelector.to}>{curSelector.to}</option>
            </select>
          </div>
          <button onClick={handleExchange}>
            {currentUser.isAuthenticated ? "Exchange" : "SIGN UP"}
          </button>
        </div>
      </div>
      {currentUser.isAuthenticated && (
        <div className="separator">
          <div className="ln" />
          <div className="dot" />
          <div className="ln" />
        </div>
      )}
      {currentUser.isAuthenticated && (
        <div className="col">
          <h3
            style={currentUser.isAuthenticated ? { marginBottom: "30px" } : {}}
          >
            Bitcoin Price
          </h3>
          <div className="block-container">
            <div className="inner-container">
              <span>Data is Update Every Ten Second</span>
              {/* <Timer timeleft={timeleft} /> */}
              <CountdownCircleTimer
                isPlaying
                initialRemainingTime={timeleft}
                duration={9}
                colors={"#004777"}
                onComplete={() => [true, 1000]}
                size={60}
                strokeWidth={3}
                color={"black"}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
            </div>
          </div>
          <div className="inner-container">
            <div className="price-col">
              <span className="title">usd</span>
              <span className="price">{currentPrice.usd.sell}</span>
            </div>
            <span> Change over the period</span>
            <span className="change">-0.54%</span>
          </div>
          <div className="inner-container">
            <div className="price-col">
              <span className="title">eur</span>
              <span className="price">{currentPrice.eur.sell}</span>
            </div>
            <span> Change over the period</span>
            <span className="change">-0.54%</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Exland;
