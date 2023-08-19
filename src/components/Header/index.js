import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger, MiddleNav, FbLogo } from './NavElement'
import logo  from '../../images/fb-logo.png'


const Header = () => {
  return (
    <>
      <PrimaryNav>
        <Menu>
          <FbLogo src={logo} alt='fb logo'/>
          {/* search bar here */}
          Left
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
        <Menu>
          Test 2
        </Menu>
      </PrimaryNav>
      <Menu>
            Test
          </Menu>
    </>
  )
}
export default Header