import React from "react";
import {
  HomePage,
  LeftPanel,
  MiddlePanel,
  RightPanel,
  Ul,
  LeftPanelDiv,
  LeftPanelLink,
  ProfilePic,
} from "../components/Home/HomeElement";
import List from "../components/List";
import profilePic from "../images/profile-picture.png";

function Home(props) {
  return (
    <>
      <HomePage>
        <LeftPanel>
          <Ul>
            <li>
              <LeftPanelLink to="/friends">
                <LeftPanelDiv>
                  <ProfilePic src={profilePic} alt="profile picture" />
                  Friends
                </LeftPanelDiv>
              </LeftPanelLink>
            </li>
            <li>
              <div>Dupa</div>
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
