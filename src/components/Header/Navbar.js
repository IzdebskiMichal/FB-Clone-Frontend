import React from "react";
import Home from "../../pages/home";
import Games from "../../pages/games";
import Media from "../../pages/media";
import Groups from "../../pages/groups";
import Header from "./index.js";
import { Routes, Route } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <Header inputHandler={props.inputHandler} />
      <Routes>
        <Route path="/" element={<Home input={props.input} />} />
        <Route path="/games" element={<Games />} />
        <Route path="/media" element={<Media />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </>
  );
};

export default NavBar;
