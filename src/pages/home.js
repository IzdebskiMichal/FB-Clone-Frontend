import React, { useState } from "react";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  Button,
  HomePage,
  LeftPanel,
  MiddlePanel,
  RightPanel,
  Ul,
  P,
} from "../components/Home/HomeElement";
import List from "../components/List";
import renderLeftPanelItems from "../components/Home/homeData";

function Home(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <HomePage>
        <LeftPanel>
          <Ul>
            {renderLeftPanelItems(isOpen)}
            <li>
              <Button onClick={toggle}>
                {isOpen ? (
                  <>
                    <ArrowUpCircleIcon /> <P>See less</P>
                  </>
                ) : (
                  <>
                    <ArrowDownCircleIcon /> <P>See more</P>
                  </>
                )}
              </Button>
            </li>
            ;
          </Ul>
        </LeftPanel>
        <MiddlePanel>
          <List input={props.input} />
        </MiddlePanel>
        <RightPanel>right</RightPanel>
      </HomePage>
    </>
  );
}

export default Home;
