import React, { useState } from "react";
import { Link } from "react-router-dom";
import Amount from "./Amount";

import visa from "../../../assets/images/logos/visa.svg";
import ms from "../../../assets/images/logos/ms.svg";
import sepa from "../../../assets/images/logos/sepa.jpg";

import clock from "../../../assets/icons/clock.png";
import shield from "../../../assets/icons/shield.png";
import checked from "../../../assets/icons/checked.png";

import { userProvider } from "../../../store/user/auth";

function Container({ method, currency }) {
  const [value, setValue] = useState(0);
  const [selectedCurrency, selectCurrency] = useState(currency || "EUR");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const { currentUser } = userProvider();
  console.log(currentUser);

  return (
    <section id="exchanger-panel" className="container">
      <div className="col">
        <h4>Select currency and amount</h4>
        <Amount
          method={method}
          currency={currency}
          selectedCurrency={selectedCurrency}
          selectCurrency={selectCurrency}
          value={value}
          setValue={setValue}
        />
      </div>
      <div className="col">
        <h4>
          {method === "deposit" && selectedCurrency === "EUR"
            ? "Choose deposit payment method"
            : method === "withdraw" && selectedCurrency === "EUR"
            ? "Choose Payment Method"
            : method === "deposit" && selectedCurrency === "BTC"
            ? "BTC deposit"
            : "BTC withdraw"}
        </h4>
        <div className="wrapper">
          {selectedCurrency === "EUR" ? (
            <>
              <div className="row">
                <div
                  className="col-btn"
                  onClick={() => setPaymentMethod("card")}
                  className={`col-btn ${paymentMethod === "card" && "active"}`}
                >
                  <div className="div" style={{ height: "1px" }}></div>
                  <div className="card-icos">
                    <img src={visa} alt="visa-logo" />
                    <img src={ms} alt="mc-logo" style={{ width: "79px" }} />
                  </div>
                  <span>
                    Pay Via <span>Card</span>
                  </span>
                </div>
                <div
                  className={`col-btn ${paymentMethod === "sepa" && "active"}`}
                  style={{ justifyContent: "space-between" }}
                  onClick={() => setPaymentMethod("sepa")}
                >
                  <div className="div" style={{ height: "1px" }}></div>
                  <div className="card-icos">
                    <img
                      style={{
                        height: "48px",
                        width: "133px",
                        alignSelf: "center",
                      }}
                      src={sepa}
                      alt="sepa-logo"
                    />
                  </div>
                  <span style={{ justifySelf: "flex-end" }}>
                    Pay Via <span>Sepa</span>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="details-actions">
                  {paymentMethod === "card" ? (
                    <>
                      <h3>You have no cards yet</h3>
                      <p>
                        Add a payment card and make a deposit in a few clicks.
                      </p>
                      <div className="btn-wrp" style={{ width: "100%" }}>
                        <button>Add New Card</button>
                        <button disabled>Remove Card</button>
                      </div>
                      <div className="features-container">
                        <div className="fe-wrap">
                          <img src={clock} alt="clock-ico" />
                          <div className="wrap">
                            <span>Fast {"&"} Easy</span>
                            <p>
                              Our payment card verification usually takes less
                              than an hour
                            </p>
                          </div>
                        </div>
                        <div className="fe-wrap">
                          <img src={shield} alt="clock-ico" />
                          <div className="wrap">
                            <span>Secure</span>
                            <p>
                              We comply with PCI DSS when storing, processing
                              and transmitting cardholder data
                            </p>
                          </div>
                        </div>
                        <div className="fe-wrap">
                          <img src={checked} alt="clock-ico" />
                          <div className="wrap">
                            <span>Convenient</span>
                            <p>
                              After successful card verification, you will be
                              able to add funds in a few clicks
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <h4>Verify your identity to use this payment method</h4>
                      <p>
                        After successful verification your account limits will
                        also be increased
                      </p>
                      <div className="features-container">
                        <div className="fe-wrap">
                          <img src={clock} alt="clock-ico" />
                          <div className="wrap">
                            <span>Fast {"&"} Easy</span>
                            <p>
                              Our payment card verification usually takes less
                              than an hour
                            </p>
                          </div>
                        </div>
                        <div className="fe-wrap">
                          <img src={shield} alt="clock-ico" />
                          <div className="wrap">
                            <span>Secure</span>
                            <p>
                              We comply with PCI DSS when storing, processing
                              and transmitting cardholder data
                            </p>
                          </div>
                        </div>
                        <div className="fe-wrap">
                          <img src={checked} alt="clock-ico" />
                          <div className="wrap">
                            <span>Convenient</span>
                            <p>
                              After successful card verification, you will be
                              able to add funds in a few clicks
                            </p>
                          </div>
                        </div>
                      </div>
                      <Link to="/verification">
                        <button className="ver-btn">Start Verification</button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="row">
                {method === "deposit" ? (
                  <div className="btc-action">
                    <div className="imgpad">
                      <img src={currentUser.user.qr_image} alt="qr" />
                    </div>
                    <div className="wrap">
                      <h3>Bitcoin wallet addres</h3>
                      <span>2NDgP9mKZjkwF5zp7h2Edx8UACQZUg3HS2c</span>
                      <p>
                        Minimum deposit amount is 0.001. If the amount is less
                        than specified, the funds will not be credited to your
                        Account. The funds will appear on your balance once the
                        deposited amount exceeds specified minimum.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="btc-action">
                    <div style={{ fontSize: "75px" }}>₿</div>
                    <div>Your Balance: 0</div>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Bitcoin address"
                    />
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      placeholder="Amount to send"
                    />
                    <button>Send</button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Container;
