import React from "react";
import visaImg from "../../assets/images/img-visa.png";

function Payment() {
  return (
    <section id="payment">
      <div className="col">
        <h1>Buy crypto with a debit or credit card</h1>
        <h4>Quickly purchase top cryptocurrencies</h4>
        <p>Become a crypto owner in minutes using your debit or credit card.</p>
        <h4>Easily withdraw your money</h4>
        <p>Withdraw your funds to a card or bank account in a few clicks</p>
      </div>
      <div className="col img-col">
        <img src={visaImg} alt="column background credit cards" />
      </div>
    </section>
  );
}

export default Payment;
