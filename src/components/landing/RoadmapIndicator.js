import React, { useEffect } from "react";

function RoadmapIndicator({ activeItem, setActiveItem }) {
  let list = [
    "REGISTER",
    "ID VERIFICATION",
    "CARD VERIFICATION",
    "ACCESS TO WALLET",
    "GET STARTED",
  ];

  useEffect(() => {
    setActiveItem(0);

    // eslint-disable-next-line
  }, []);

  let generatedMap = list.map((item, key) => {
    return (
      <div
        className={`indicator-item-container ${
          activeItem === key && "indicator-item-active"
        }`}
        key={key}
        onClick={() => setActiveItem(key)}
      >
        <div className="inner-ico" />
        <span className="label">{item}</span>
      </div>
    );
  });

  const _goNext = () => {
    if (activeItem === 4) {
      setActiveItem(0);
    } else {
      setActiveItem(activeItem + 1);
    }
  };
  const _goBack = () => {
    if (activeItem === 0) {
      setActiveItem(4);
    } else {
      setActiveItem(activeItem - 1);
    }
  };
  return (
    <>
      <div className="arrow-btn" onClick={_goBack}>
        <span>{"<"}</span>
      </div>
      <div className="map-container">
        {/* <div className="path" /> */}
        {generatedMap}
      </div>
      <div className="arrow-btn" onClick={_goNext}>
        <span>{">"}</span>
      </div>
    </>
  );
}

export default RoadmapIndicator;
