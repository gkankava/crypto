import React from "react";
import ContactForm from "../components/contact/ContactForm";

import mailIco from "../assets/icons/mail-ico.svg";

import { userProvider } from "../store/user/auth";

function Contact() {
  const { currentUser } = userProvider();
  return (
    <section id="contact" className="container">
      <h1>Contact Us</h1>
      <div className="content-wrapper">
        <div className="col col-1">
          <ContactForm user={currentUser} />
        </div>
        <div className="col col-2">
          <div className="info-container">
            <div className="info-icon">
              <img src={mailIco} alt="email icon" />
            </div>
            <div className="details-container">
              <span className="title">Mail</span>
              <span className="desc">contact@cryptoiex.io</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
