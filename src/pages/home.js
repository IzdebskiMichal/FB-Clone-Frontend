import React, { useEffect, useState } from "react";
import {
  HomePage,
  LeftPanel,
  MiddlePanel,
  RightPanel,
} from "../components/Home/HomeElement";
import List from "../components/Home/List";
import "react-slideshow-image/dist/styles.css";
import Products from "../components/Home/Products";

import LeftPanelContent from "../components/Home/leftPanelContent";
import "../styles.css";

function Home(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <HomePage>
        <LeftPanel>
          <LeftPanelContent isOpen={isOpen} toggle={toggle} />
        </LeftPanel>
        <MiddlePanel>
          <Products />
          <List input={props.input} />
          <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
          </section>
        </MiddlePanel>
        <RightPanel>right</RightPanel>
      </HomePage>
    </>
  );
}

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default Home;
