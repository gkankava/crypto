import React, { useEffect } from "react";
import parse from "html-react-parser";

import { pagesProvider } from "../store/pages";
import { fetchPage } from "../store/actions/pages";

function About() {
  const { aboutPage, setAboutPage } = pagesProvider();

  useEffect(() => {
    fetchPage("aboutus", setAboutPage);
    // eslint-disable-next-line
  }, []);

  return (
    <section id="about" className="container">
      <div className="content-wrapper">{parse(aboutPage)}</div>
    </section>
  );
}

export default About;
