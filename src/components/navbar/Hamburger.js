import React from "react";
import { Squash } from "hamburger-react";

function Hamburger({ burgerStatus, setBurgerStatus }) {
  return (
    <Squash
      size={25}
      color={burgerStatus ? "black" : "white"}
      toggled={burgerStatus}
      toggle={setBurgerStatus}
      duration={0.3}
      hideOutline={true}
    />
  );
}

export default Hamburger;
