import axios from "axios";
import React, { useState, useEffect } from "react";
import { CgSwapVertical } from "react-icons/cg";

import { modalProvider } from "../../store/modal_state/modalState";

function Exland() {
  const { setAuthModalState } = modalProvider();
  const [price, setPrice] = useState(1);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [curSelector, setCurSelector] = useState({
    from: "EUR",
    to: "BTC",
  });

  useEffect(() => {
    try {
      axios.get("https://blockchain.info/ticker").then((res) => {
        setPrice(res.data.EUR.last);
        setFrom(1);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSwap = () => {
    setCurSelector({
      from: curSelector.to,
      to: curSelector.from,
    });
  };

  useEffect(() => {
    if (curSelector.from === "EUR") {
      let val = from / price;
      setTo(parseFloat(val.toFixed(5)));
    } else {
      let val = from * price;
      setTo(parseFloat(val.toFixed(50)));
    }
    // eslint-disable-next-line
  }, [from, curSelector]);

  return (
    <section id="hero">
      <div className="col">
        <h1>
          <b>I</b>nstant <b>EX</b>change
        </h1>
        <p>
          We made it fast and easy. <br /> Founded in 2019 by the group of
          crypto entrepreneurs and enthusiasts, CryptoIEX is the premier Estonia
          - based blockchain platform, providing lightning-fast trade execution
        </p>
      </div>
      <div className="col">
        <h3>Exchange</h3>
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
            <span>1 BTC = {price} EUR</span>
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
          <button
            onClick={() => {
              setAuthModalState(true, "signup");
            }}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </section>
  );
}

export default Exland;
