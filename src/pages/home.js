import React, { useState } from "react";
import {
  HomePage,
  LeftPanel,
  MiddlePanel,
  RightPanel,
  Ul,
  LeftPanelDiv,
  LeftPanelLink,
  ProfilePic,
  Button,
} from "../components/Home/HomeElement";
import List from "../components/List";
import profilePic from "../images/profile-picture.png";

function Home(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
    console.log(isOpen);
  }

  function HiddenElement() {
    return (
      <li>
        <LeftPanelLink to="/friends">
          <LeftPanelDiv>
            <ProfilePic src={profilePic} alt="profile picture" />
            Hidden
          </LeftPanelDiv>
        </LeftPanelLink>
      </li>
    );
  }

  return (
    <>
      <HomePage>
        <LeftPanel>
          <Ul>
            <li>
              <LeftPanelLink to="/profile">
                <LeftPanelDiv>
                  <ProfilePic src={profilePic} alt="profile picture" />
                  Michał Izdebski
                </LeftPanelDiv>
              </LeftPanelLink>
            </li>
            <li>
              <LeftPanelLink to="/friends">
                <LeftPanelDiv>
                  <ProfilePic src={profilePic} alt="profile picture" />
                  Friends
                </LeftPanelDiv>
              </LeftPanelLink>
            </li>
            <li>
              <LeftPanelLink to="/friends">
                <LeftPanelDiv>
                  <ProfilePic src={profilePic} alt="profile picture" />
                  Friends
                </LeftPanelDiv>
              </LeftPanelLink>
            </li>
            <li>
              <LeftPanelLink to="/friends">
                <LeftPanelDiv>
                  <ProfilePic src={profilePic} alt="profile picture" />
                  Friends
                </LeftPanelDiv>
              </LeftPanelLink>
            </li>
            <li>
              <LeftPanelLink to="/friends">
                <LeftPanelDiv>
                  <ProfilePic src={profilePic} alt="profile picture" />
                  Friends
                </LeftPanelDiv>
              </LeftPanelLink>
            </li>
            {isOpen && <HiddenElement />}
            <li>
              <Button onClick={toggle}>
                <LeftPanelDiv>
                  <ProfilePic src={profilePic} alt="profile picture" />
                  Zobacz więcej
                </LeftPanelDiv>
              </Button>
            </li>
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
