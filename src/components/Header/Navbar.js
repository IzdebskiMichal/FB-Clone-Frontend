import React from "react";
import Header from "./index.js";

const NavBar = (props) => {
  return (
    <>
      <Header inputHandler={props.inputHandler} />
    </>
  );
};

export default NavBar;
