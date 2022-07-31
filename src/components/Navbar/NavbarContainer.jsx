import React from 'react'
import CsiLogo from './CsiLogo'

const NavbarContainer = (props) => {
  return (
    <nav className="navbarContainer">
         <CsiLogo />
        <ul className='navbar-ul'>
        {props.children}
        </ul>
    </nav>
  )
}

export default NavbarContainer
