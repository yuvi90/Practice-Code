import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'

export const SideMenuContainer = styled.aside`
    z-index: 1000;
    position: fixed;
    top: 0;
    right: ${(props)=>(props.isOpen?"0":"-1000px")};
    height: 100vh;
    width: 450px;
    background-color: #e7ac00;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 6rem;
    transition: all 0.3s ease-in-out;

    @media screen and (max-width: 450px){
        width: 100%;
    }
`

export const IconContainer = styled.div`
    
`

export const CrossIcon = styled(FaTimes)`
    color: #000;
    font-size: 1.5rem;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    transition: 0.2s ease-out;

    &:hover {
        color: #fff;
    }
`

export const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    padding-top: 2rem;
    `

export const SideMenuRoute = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    color: #000;
    font-weight: 700;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #fff;
    }    
` 

export const BtnContainer = styled.div`
    margin-top: auto;
    margin-bottom: 6rem;
`

export const SideMenuBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;
    
    &:hover {
        background-color: #bb1328;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`

