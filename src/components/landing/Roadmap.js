import React, { useState } from "react";
import RoadmapIndicator from "./RoadmapIndicator";
import Content from "./Content";

function Roadmap() {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <section id="roadmap">
      <div className="indicator-container">
        <RoadmapIndicator
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
      <div className="content">
        <Content activeItem={activeItem} />
      </div>
    </section>
  );
}

export default Roadmap;
