import React, { useEffect } from "react";
import parse from "html-react-parser";

import { pagesProvider } from "../store/pages";
import { fetchPage } from "../store/actions/pages";

function Legal() {
  const { legalPage, setLegalPage } = pagesProvider();

  useEffect(() => {
    fetchPage("legal", setLegalPage);
    // eslint-disable-next-line
  }, []);

  console.log(legalPage);

  return (
    <section id="legal" className="container">
      <h1>INTERNAL PROCEDURE AND CONTROL RULES</h1>
      <div className="content-wrapper">{parse(legalPage)}</div>
    </section>
  );
}

export default Legal;
