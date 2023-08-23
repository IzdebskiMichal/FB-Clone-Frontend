import React from "react";
import {
  HomePage,
  LeftPanel,
  MiddlePanel,
  RightPanel,
} from "../components/Home/HomeElement";

function Home() {
  return (
    <>
      <HomePage>
        <LeftPanel>left</LeftPanel>
        <MiddlePanel>mid</MiddlePanel>
        <RightPanel>right</RightPanel>
      </HomePage>
    </>
  );
}
export default Home;
