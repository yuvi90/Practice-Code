// Dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaMagento, FaTimes } from "react-icons/fa";
import { Container, Button } from "../../styles/GlobalStyles";

//-------------------------------Components
// Nav Main Container

export const Nav = styled.nav`
    height: 80px;
    background: #101522;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

//-------------------------------Components
// Nav Container

export const NavContainer = styled(Container)`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

//-------------------------------Components
// Logo

export const NavLogo = styled(Link)`
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    text-decoration: none;
    justify-self: flex-start;
    display: flex;
    align-items: center;
`;

export const NavLogoIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`;

//-------------------------------Components
// Menu Icon

export const MobileMenuContainer = styled.div`
    display: none;
    
    @media screen and (max-width: 991px) {
        display: block;
        font-size: 1.8rem;
    }
`;

export const CrossIcon = styled(FaTimes)`
    color: #fff;
    cursor: pointer;
`;

export const MenuIcon = styled(FaBars)`
    color: #fff;
    cursor: pointer;
`;

//-------------------------------Components
// Menu

export const MenuContainer = styled.div`
        display: flex;
        gap: 2rem;

    @media screen and (max-width: 991px) {
        background-color: #101522;
        position: absolute;
        top: 80px;
        left: ${(props)=>(props.isOpen?"0":"-100%")};
        height: 95vh;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        padding-top: 2rem;
        transition: all 0.5s ease-in-out;
    }
`;

export const MenuLinks = styled(Link)`
    color: #fff;
    font-size: 1.25rem;
    font-weight: 400;
    text-decoration: none;
    padding: 0.5rem 0;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #4b59f7;
    }
`;

export const NavMenuButton = styled(Button)`
    font-weight: 500;
`;