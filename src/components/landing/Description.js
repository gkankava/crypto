import React from "react";
import PhoneBg from "../../assets/images/img-phones.png";
import { BsArrowRight } from "react-icons/bs";

import { modalProvider } from "../../store/modal_state/modalState";

function Description() {
  const { setAuthModalState } = modalProvider();
  return (
    <section id="description">
      <div className="col col-1">
        <img src={PhoneBg} alt="column 1 background" />
      </div>
      <div className="col">
        <h1>A trusted and secure crypto exchange</h1>
        <p>
          Secure platform – Cryptoiex employs the most reliable, effective
          security technologies available. We keep to offer customer friendly
          solutions and most profitable rates.
        </p>
        <p>
          Also, Cryptoiex enables two-factor authentication for all users and
          provides a host of additional security features to provide multiple
          layers of protection. At Cryptoiex, security will always be a top
          priority in every decision we make.
        </p>
        <button
          className="desc-btn"
          onClick={() => {
            setAuthModalState(true, "signup");
          }}
        >
          <span>Sign Up</span>
          <BsArrowRight size={16} color="white" />
        </button>
      </div>
    </section>
  );
}

export default Description;
