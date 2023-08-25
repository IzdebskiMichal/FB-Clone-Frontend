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

const defaultLeftPanelItemDetails = {
  imgSize: "10%",
};

const user = {
  name: "Michał Izdebski",
  imgUrl: { profilePic },
  imgSize: "10%",
};

const leftPanelVisibleItems = [
  {
    title: "profile",
    details: { name: user.name, imgUrl: user.imgUrl, imgSize: "10%" },
    id: 1,
  },
  {
    title: "friends",
    details: { name: user.name, imgUrl: user.imgUrl, imgSize: "10%" },
    id: 2,
  },
  // { title: "memories", details: { leftPanelItemDetails }, id: 3 },
  // { title: "messenger", details: { leftPanelItemDetails }, id: 4 },
  // { title: "saved", details: { leftPanelItemDetails }, id: 5 },
  // { title: "groups", details: { leftPanelItemDetails }, id: 6 },
];

function renderLeftPanelItems() {
  return leftPanelVisibleItems.map((item) => (
    <li>
      <LeftPanelLink to={"/" + item.title}>
        <LeftPanelDiv>
          <img
            src={item.details.imgUrl.profilePic}
            alt={"Photo of " + item.details.name}
            style={{
              width: item.details.imgSize,
              padding: 0,
              margin: 0,
            }}
          />
          <p style={{ paddingLeft: 10 }}>{item.details.name}</p>
        </LeftPanelDiv>
      </LeftPanelLink>
    </li>
  ));
}

function Home(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
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
            {renderLeftPanelItems()}
            <li>
              <Button onClick={toggle}>
                <ProfilePic src={profilePic} alt="profile picture" />
                Zobacz więcej
              </Button>
            </li>
          </Ul>

          {/* <Ul>
            <li>
              <LeftPanelLink to="/profile">
                <LeftPanelDiv>
                  <img
                    src={profilePic}
                    alt={"Photo of " + leftPanelItemDetails.name}
                    style={{ width: leftPanelItemDetails.imgSize }}
                  />
                  <p style={{ paddingLeft: 10 }}>{leftPanelItemDetails.name}</p>
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
          </Ul> */}
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
