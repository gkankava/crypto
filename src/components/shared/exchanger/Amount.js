import React from "react";

function Amount({ method, selectedCurrency, selectCurrency, value, setValue }) {
  return (
    <div className="amount-panel">
      <div className="input-container">
        <label>{selectedCurrency}</label>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="number"
          name="amount"
          id="amount"
        />
      </div>
      <div className="currency-selector">
        <div
          className={`currency-btn ${selectedCurrency === "EUR" && "active"}`}
          onClick={() => selectCurrency("EUR")}
        >
          EUR
        </div>
        <div
          className={`currency-btn ${selectedCurrency === "BTC" && "active"}`}
          onClick={() => selectCurrency("BTC")}
        >
          BTC
        </div>
      </div>
      <div className="commission-counter">
        <span>Commission 3.2%</span>
        <span>{parseInt(value) * 0.032}</span>
      </div>
      <div className="total-counter">
        <span>Total Amount:</span>
        <span>{parseInt(value) + parseInt(value) * 0.032}</span>
      </div>
      <button disabled={!parseInt(value) > 0}>
        {method === "deposit" ? "Deposit" : "Withdraw"}
      </button>
    </div>
  );
}

export default Amount;
