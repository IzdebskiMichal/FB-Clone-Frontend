import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Home } from "@styled-icons/ionicons-outline/Home";

export const PrimaryNav = styled.nav`
  height: 55px;
  display: flex;
  // background: #1c1e21;
  background: green;
  justify-content: space-between;
`;

export const MenuLink = styled(Link)`
  color: #fff;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    color: #000000;
  }
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
  height: 100%;
`;
