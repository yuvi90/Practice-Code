// Deps
import styled from "styled-components";
import { bp, mediaQ } from "../../styles/utilities/mediaQ";

//-----------------------------------------------RootContainer

export const RootContainer = styled.header`
    position: relative;
    background-color: ${({ theme }) => theme.colors.background.default};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
    
    .nav-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        
        &__logo {
            font-size: 5rem;
            transition: transform 0.4s ease;

            &:hover {
                transform: scale(0.9);
            }
        }

        &__menu-icon {
            display: none;
            position: absolute;
            top: 50%;
            transform: translateY(-40%);
            right: 3.2rem;
            font-size: 3rem;
            cursor: pointer;
            z-index: 1000;
            
            ${mediaQ("down", bp.sm)} {
                display: block;
            }
        }
    }
`;

//-----------------------------------------------Nav

export const Nav = styled.nav`

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        font-size: 2rem;
        transition: right 0.3s ease-in-out;
        
        ${mediaQ("down", bp.sm)} {
            position: absolute;
            top: 0;
            right: ${(props) => props.isMenuOpen ? "0" : "100%"};
            flex-direction: column;
            gap: 8rem;
            background-color: ${({ theme }) => theme.colors.background.default};
            height: 100vh;
            width: 100%;
            z-index: 999;
        }
        
        .menu-links {
            &:link,
            &:visited {
                transition: color 0.2s linear;
                color: ${({ theme }) => theme.colors.action.active};
                font-size: 1.8rem;
                text-transform: uppercase;

                ${mediaQ("down", bp.sm)}{
                    font-size: 3.5rem;
                }
            }

            &:hover,
            &:active {
                color: ${({ theme }) => theme.colors.primary.light};
            }
        }
    }
`