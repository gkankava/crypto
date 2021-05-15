import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";

import { confirmOrder } from "../../../store/actions/makeOrder";

function ConfirmationModal({ data = initialState, setData }) {
  const [timeleft, setTimeleft] = useState(10);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setData(false);
  //     }, 10000);
  //   }, []);
  useEffect(() => {
    timeleft > 0 && setTimeout(() => setTimeleft(timeleft - 1), 1000);
    timeleft === 0 && setData(false);
  }, [timeleft]);

  const { addToast } = useToasts();
  const { amount, currency_from, currency_to, id } = data.transaction;
  const { market_price } = data;
  let amountTo =
    currency_from === "EUR" ? amount / market_price : amount * market_price;
  let fixedAmountTo = amountTo.toFixed(5);
  let amountFrom = amount;

  const handleExchange = () => {
    confirmOrder(id, addToast);
  };

  return (
    <div className="confirm-modal" onClick={() => setData(false)}>
      <div className="modal-container">
        <div className="ticket">
          Buy&nbsp;<b>{fixedAmountTo}</b>&nbsp;
          {currency_to} for&nbsp;<b>{amountFrom}</b>
          &nbsp;{currency_from}
        </div>

        <button onClick={handleExchange}>Exchange</button>
        <p>
          NOTE:{" "}
          <i>This price will on be available for the next {timeleft} seconds</i>{" "}
        </p>
      </div>
    </div>
  );
}

export default ConfirmationModal;

const initialState = {
  market_price: "0",
  transactions: {
    amount: 0,
    currency_from: "",
    currency_to: "",
    id: null,
  },
};
