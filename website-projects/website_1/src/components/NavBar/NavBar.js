// Dependencies
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import { Nav, NavContainer, NavLogo, NavLogoIcon, MobileMenuContainer, CrossIcon, MenuIcon, MenuContainer, MenuLinks, NavMenuButton } from './NavBarElements';

//----------------------------------------------------------------

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toogleMenu = () => { setIsOpen(!isOpen) };
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
        return () => {window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))}
    },[]);

    return (
        <Nav>
        
            <NavContainer>
        
                <NavLogo to="/"><NavLogoIcon /> ULTRA</NavLogo>

                <MobileMenuContainer onClick={toogleMenu}>
                    {isOpen ? <CrossIcon /> : <MenuIcon />}
                </MobileMenuContainer>

                <MenuContainer isOpen={isOpen}>
                    <MenuLinks to="/" onClick={toogleMenu}>Home</MenuLinks>
                    <MenuLinks to="/products" onClick={toogleMenu}>Products</MenuLinks>
                    <MenuLinks to="/services" onClick={toogleMenu}>Services</MenuLinks>
                    <MenuLinks to="/prices" onClick={toogleMenu}>Prices</MenuLinks>
                    <Link to="/sign-up"><NavMenuButton onClick={toogleMenu} big={windowWidth<991?true:false}>SIGN UP</NavMenuButton></Link>
                </MenuContainer>
            
            </NavContainer>
        
        </Nav>
    )
}

export default NavBar;