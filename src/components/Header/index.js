import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger, MiddleNav, Div } from './NavElement'

const Header = () => {
  return (
    <>
      <PrimaryNav>
        <Menu>
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