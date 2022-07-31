import React from 'react'

const NavbarContainer = (props) => {
  return (
    <nav className="navbarContainer">
        <ul className='navbar-ul'>
        {props.children}
        </ul>
    </nav>
  )
}

export default NavbarContainer
