// Deps
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Components
import { RootContainer, Nav } from './NavbarElements';
import { CgMenu, CgClose } from "react-icons/cg";

//-----------------------------------------------------------

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <RootContainer>

      <div className="nav-wrapper container">

        <NavLink to="/"><h1 className="nav-wrapper__logo">LOGO</h1></NavLink>

        <div className="nav-wrapper__menu-icon" onClick={toggleMenu}>{isMenuOpen ? <CgClose/> : <CgMenu/>}</div>

        <Nav isMenuOpen={isMenuOpen}>

          <ul>
            <li><NavLink to="/" className="menu-links">Home</NavLink></li>
            <li><NavLink to="/about" className="menu-links">About</NavLink></li>
            <li><NavLink to="/services" className="menu-links">Services</NavLink></li>
            <li><NavLink to="/contact" className="menu-links">Contact</NavLink></li>
          </ul>

        </Nav>
      
      </div>

    </RootContainer>
  )
}

export default Navbar