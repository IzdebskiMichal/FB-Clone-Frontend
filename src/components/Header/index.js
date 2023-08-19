import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'

const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
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
      </PrimaryNav>
    </>
  )
}
export default Navbar