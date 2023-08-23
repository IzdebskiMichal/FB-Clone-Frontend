import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const HomePage = styled.div`
  background-color: grey;
  overflow: hidden;
`;

export const LeftPanel = styled.div`
  float: left;
  padding-top: 10px;
  width: 25%;
  background: #18191a;
  height: 100vh;
`;

export const MiddlePanel = styled.div`
  float: left;
  width: 50%;
  background: green;
`;

export const RightPanel = styled.div`
  float: right;
  padding-top: 10px;
  width: 25%;
  background: blue;
  overflow: auto;
`;

export const LeftPanelDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px 5px 10px;
  margin-left: 10px;
  width: 70%;
  &:hover {
    background-color: grey;
  }
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0px;
`;

export const LeftPanelLink = styled(Link)`
  text-decoration: none;
  color: #65676b;
  cursor: pointer;
`;

export const ProfilePic = styled.img`
  padding-right: 10px;
  width: 10%;
`;
