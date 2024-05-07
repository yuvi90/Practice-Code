import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
    position: relative;
    height: 120px;
    width: 100%;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    padding: 30px;

    @media screen and (max-width: 724px) {
        justify-content: space-between;
    }
`

export const LogoLink = styled(NavLink)`
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    transition: all 0.2s ease-out;
`

export const MenuContainer = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    cursor: pointer;
    transition: 0.2s ease-in-out;
    
    p {
        font-size: 1.2rem;
        font-weight: 700;
    }

    &:hover {
        color: #000;
    }
`

export const PizzaMenuIcon = styled(FaPizzaSlice)`
    font-size: 2rem;
`