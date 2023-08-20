import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Home } from "@styled-icons/ionicons-outline/Home";
import { Youtube } from "@styled-icons/remix-line/Youtube";
import { Groups } from "@styled-icons/material-outlined/Groups";
import { Games } from "@styled-icons/fluentui-system-regular/Games";

export const PrimaryNav = styled.nav`
  height: 55px;
  display: flex;
  background: #1c1e21;
  justify-content: space-between;
`;

export const MenuLink = styled(Link)`
  color: #65676b;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
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
  justify-content: center;
  self-align: center;
`;

export const FbLogo = styled.img`
  padding: 8px 10px 7px 16px;
`;

export const SearchDiv = styled.div`
  width: 80%;
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

// export const MediaIcon = styled(Media)`
//   width: 100%;
//   height: 50%;
// `;
