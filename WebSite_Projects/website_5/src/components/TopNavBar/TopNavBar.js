import React from 'react';
// components
import { Nav, LogoLink, MenuContainer, PizzaMenuIcon } from './TopNavBarElements';

const Navbar = (props) => {
    return (
        <Nav>
            <LogoLink to={"/"}>Pizza</LogoLink>
            <MenuContainer onClick={props.toogleMenu}>
                <p>Menu</p>
                <PizzaMenuIcon />
            </MenuContainer>
        </Nav>
    )
}

export default Navbar;