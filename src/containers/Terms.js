import React, { useEffect } from "react";
import parse from "html-react-parser";

import { pagesProvider } from "../store/pages";
import { fetchPage } from "../store/actions/pages";

function Terms() {
  const { termsPage, setTermsPage } = pagesProvider();

  useEffect(() => {
    fetchPage("terms", setTermsPage);
    // eslint-disable-next-line
  }, []);

  return (
    <section id="terms" className="container">
      <h1>Terms Of Service</h1>
      <div className="content-wrapper">{parse(termsPage)}</div>
    </section>
  );
}

export default Terms;
