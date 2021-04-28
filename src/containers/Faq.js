import React, { useEffect, useRef, createRef } from "react";
import parse from "html-react-parser";

import { pagesProvider } from "../store/pages";
import { fetchPage } from "../store/actions/pages";

function Refund() {
  const { faqPage, setFaqPage } = pagesProvider();

  let refs = useRef([]);

  for (let i = 0; i < faqPage.length; i++) {
    refs.current[i] = createRef();
  }

  useEffect(() => {
    fetchPage("faq", setFaqPage);
    // eslint-disable-next-line
  }, []);

  let list = faqPage.map((item, index) => (
    <div className="accordion" key={index}>
      <div className="accordion-box">
        <h4
          onClick={() => {
            if (
              refs.current[index].current.classList.contains("accordion-active")
            ) {
              refs.current[index].current.classList.remove("accordion-active");
            } else {
              refs.current[index].current.classList.add("accordion-active");
            }
          }}
        >
          {item.title}
        </h4>
        <div ref={refs.current[index]} className="content">
          {parse(item.description)}
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    console.log(refs);
  }, [refs]);

  return (
    <section id="faq" className="container">
      <h1>F.A.Q.</h1>
      <div className="content-wrapper">{list}</div>
    </section>
  );
}

export default Refund;
