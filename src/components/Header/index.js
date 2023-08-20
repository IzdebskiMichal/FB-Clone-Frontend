import React from "react";
import { PrimaryNav, MenuLink, Menu, FbLogo } from "./NavElement";
import logo from "../../images/fb-logo.png";
import SearchBar from "../../pages/searchBar";

const Header = (props) => {
  return (
    <>
      <PrimaryNav>
        <Menu>
          <FbLogo src={logo} alt="fb logo" />
          {/* search bar here */}
          <SearchBar inputHandler={props.inputHandler} />
        </Menu>
        <Menu>
          <MenuLink to="/home" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/media" activeStyle>
            Media
          </MenuLink>
          <MenuLink to="/groups" activeStyle>
            Groups
          </MenuLink>
          <MenuLink to="/games" activeStyle>
            Games
          </MenuLink>
        </Menu>
        <Menu>Test 2</Menu>
      </PrimaryNav>
      <Menu>Test</Menu>
    </>
  );
};
export default Header;
