import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const PrimaryNav = styled.nav`
  height: 55px;
  display: flex;
  background: #1c1e21;
  justify-content: space-between;
`;

// export const LeftNav = styled.nav`
//   z-index: 14;
//   height: 50px;
//   display: flex;
//   background: #1c1e21;
//   justify-content: space-between;
//   padding: 0.18rem calc((100vw - 1000px) / 2);
// `

// export const MiddleNav = styled.div`
//   justify-content: space-between;
// `

// export const RightNav = styled.nav`
//   z-index: 14;
//   height: 50px;
//   display: flex;
//   background: #1c1e21;
//   justify-content: space-between;
//   padding: 0.18rem calc((100vw - 1000px) / 2);
// `

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
export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
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
