import React, { useEffect } from "react";
import parse from "html-react-parser";

import { pagesProvider } from "../store/pages";
import { fetchPage } from "../store/actions/pages";

function Refund() {
  const { refundPage, setRefundPage } = pagesProvider();

  useEffect(() => {
    fetchPage("refund", setRefundPage);
    // eslint-disable-next-line
  }, []);

  console.log(refundPage);

  return (
    <section id="refund" className="container">
      <h1>Refund Policy</h1>
      <div className="content-wrapper">{parse(refundPage)}</div>
    </section>
  );
}

export default Refund;
