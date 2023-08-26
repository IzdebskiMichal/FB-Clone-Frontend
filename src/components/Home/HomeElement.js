import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { People } from "@styled-icons/bootstrap/People";
import { Clock } from "@styled-icons/entypo/Clock";
import { Groups } from "@styled-icons/material-outlined/Groups";
import { Messenger } from "@styled-icons/boxicons-logos/Messenger";
import { Tv } from "@styled-icons/boxicons-regular/Tv";
import { ArrowUpCircle } from "@styled-icons/bootstrap/ArrowUpCircle";
import { ArrowDownCircle } from "@styled-icons/bootstrap/ArrowDownCircle";
import { Games } from "@styled-icons/fluentui-system-regular/Games";

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
  padding-left: 10px;
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

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 0px 5px 10px;
  margin-left: 10px;
  background: none;
  cursor: pointer;
  width: 70%;
  background-color: inherit;
  border: none;
  &:hover {
    background-color: grey;
  }
`;

export const FriendsIcon = styled(People)`
  width: 10%;
  height: 100%;
`;

export const MemoriesIcon = styled(Clock)`
  width: 10%;
  height: 100%;
`;

export const GroupsIcon = styled(Groups)`
  width: 10%;
  height: 100%;
`;

export const MessengerIcon = styled(Messenger)`
  width: 10%;
  height: 100%;
`;

export const FilmIcon = styled(Tv)`
  width: 10%;
  height: 100%;
`;

export const GamesIcon = styled(Games)`
  width: 10%;
  height: 100%;
`;

export const ArrowUpCircleIcon = styled(ArrowUpCircle)`
  width: 10%;
  height: 100%;
  color: #65676b;
`;

export const ArrowDownCircleIcon = styled(ArrowDownCircle)`
  width: 10%;
  height: 100%;
  color: #65676b;
`;

export const P = styled.p`
  color: white;
  padding-left: 10px;
`;
