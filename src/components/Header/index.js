import React from "react";
import {
  PrimaryNav,
  MenuLink,
  Menu,
  MenuLeft,
  FbLogo,
  HomeIcon,
  LogoLink,
} from "./NavElement";
import logo from "../../images/fb-logo.png";
import SearchBar from "../../pages/searchBar";

const Header = (props) => {
  return (
    <>
      <PrimaryNav>
        <MenuLeft>
          <LogoLink to="/home">
            <FbLogo src={logo} alt="fb logo" />
          </LogoLink>
          {/* search bar here */}
          <SearchBar inputHandler={props.inputHandler} />
        </MenuLeft>
        <Menu>
          <MenuLink to="/home" activeStyle>
            <HomeIcon />
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
      <MenuLink></MenuLink>
    </>
  );
};
export default Header;
