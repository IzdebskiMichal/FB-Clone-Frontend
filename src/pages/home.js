import React, { useEffect, useState } from "react";
import {
  HomePage,
  MiddlePanel,
  RightPanel,
} from "../components/Home/HomeElement";
import List from "../components/List";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Bookworm from "../images/bookworm.jpg";
import LeftPanelContent from "../components/Home/leftPanelContent";

function Home(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <HomePage>
        <LeftPanelContent isOpen={isOpen} toggle={toggle}></LeftPanelContent>
        <MiddlePanel>
          <Slide slidesToScroll={2} slidesToShow={2}>
            <div style={{ height: "30vh", width: "100%" }}>
              <img
                src={Bookworm}
                alt="bookworm"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ height: "30vh", width: "100%" }}>
              <img
                src={Bookworm}
                alt="bookworm"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ height: "30vh", width: "100%" }}>
              <img
                src={Bookworm}
                alt="bookworm"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ height: "30vh", width: "100%" }}>
              <img
                src={Bookworm}
                alt="bookworm"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ height: "30vh", width: "100%" }}>
              <img
                src={Bookworm}
                alt="bookworm"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ height: "30vh", width: "100%" }}>
              <img
                src={Bookworm}
                alt="bookworm"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ height: "30vh", width: "100%" }}>
              <img
                src={Bookworm}
                alt="bookworm"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ height: "30vh", width: "100%" }}>
              <img
                src={Bookworm}
                alt="bookworm"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </div>
          </Slide>

          <List input={props.input} />
        </MiddlePanel>
        <RightPanel>right</RightPanel>
      </HomePage>
    </>
  );
}

export default Home;
