import React from "react";
import { columns } from "./footerCol";
import { GrTwitter, GrInstagram } from "react-icons/gr";

function Footer() {
  return (
    <footer>
      <div className="container top">
        {columns}
        <div className="col col-container">
          <span className="col-title">follow</span>
          <ul className="col-items fol">
            <li>
              <a
                href="https://twitter.com/cryptoiex"
                rel="noreferrer"
                target="_blank"
              >
                <GrTwitter color="#69696975" size={24} />
              </a>
            </li>
            <li>
              <a href="instagram.com" target="_blank" rel="noreferrer">
                <GrInstagram color="#69696975" size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="container bot">
        <span>Copyright 2021 | All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
