import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Home } from "@styled-icons/ionicons-outline/Home";
import { Youtube } from "@styled-icons/remix-line/Youtube";
import { Groups } from "@styled-icons/material-outlined/Groups";
import { Games } from "@styled-icons/fluentui-system-regular/Games";
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";

export const PrimaryNav = styled.nav`
  height: 55px;
  display: flex;
  background: #1c1e21;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const MenuLink = styled(Link)`
  color: #65676b;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 3.3rem;
  height: 100%;
  &.active {
    color: #4599ff;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
`;

export const MenuLeft = styled.div`
  display: flex;
  justify-content: center;
  self-align: center;
`;

export const Menu = styled.div`
  display: flex;
  padding-right: 100px;
  justify-content: center;
  self-align: center;
`;

export const FbLogo = styled.img`
  padding: 8px 10px 7px 16px;
`;

export const SearchDiv = styled.div`
  background-color: grey;
  width: 80%;
  border-radius: 5px;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-left: 5px;
`;

export const HomeIcon = styled(Home)`
  width: 100%;
  height: 50%;
`;

export const MediaIcon = styled(Youtube)`
  width: 100%;
  height: 60%;
`;

export const GroupsIcon = styled(Groups)`
  width: 100%;
  height: 70%;
`;

export const GamesIcon = styled(Games)`
  width: 100%;
  height: 70%;
`;

export const SearchIcon = styled(SearchAlt2)`
  width: 100%;
  height: 70%;
`;
