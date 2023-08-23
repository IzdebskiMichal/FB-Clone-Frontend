import React from "react";
import { FriendsDiv, Div } from "../components/Friends/FriendsElement";
import img from "../images/clown.jpg";

function Friends() {
  //   document.getElementById("body").style.backgroundSize = "60px 120px";
  document.body.style.backgroundImage = `url(${img})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "left center";

  return (
    <>
      <FriendsDiv>
        <Div>YOU</Div>
        <Div>DO</Div>
        <Div>NOT</Div>
        <Div>HAVE</Div>
        <Div>ANY</Div>
        <Div>FRIENDS</Div>
      </FriendsDiv>
    </>
  );
}

export default Friends;
