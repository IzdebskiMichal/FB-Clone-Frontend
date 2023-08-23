import React from "react";
import {
  HomePage,
  LeftPanel,
  MiddlePanel,
  RightPanel,
} from "../components/Home/HomeElement";
import List from "../components/List";

function Home(props) {
  return (
    <>
      <HomePage>
        <LeftPanel>left</LeftPanel>
        <MiddlePanel>
          <List input={props.input} />
        </MiddlePanel>
        <RightPanel>right</RightPanel>
      </HomePage>
    </>
  );
}
export default Home;
