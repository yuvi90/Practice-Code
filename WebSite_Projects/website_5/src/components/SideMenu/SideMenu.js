import React from 'react'
import { SideMenuContainer, CrossIcon, SideMenuRoute, MenuContainer, IconContainer, BtnContainer, SideMenuBtn } from './SideMenuElements'


const SideMenu = (props) => {

        return (
        <SideMenuContainer isOpen={props.isOpen}>
            <IconContainer>
                <CrossIcon onClick={props.toogleMenu} />
            </IconContainer>
            <MenuContainer>
                <SideMenuRoute>Pizzas</SideMenuRoute>
                <SideMenuRoute>Desserts</SideMenuRoute>
                <SideMenuRoute>Full Menu</SideMenuRoute>
            </MenuContainer>
            <BtnContainer>
                <SideMenuBtn>Order Now</SideMenuBtn>
            </BtnContainer>
        </SideMenuContainer>
    )
}

export default SideMenu