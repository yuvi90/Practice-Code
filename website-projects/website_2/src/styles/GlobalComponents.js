// Deps
import styled from "styled-components";

//---------------------------------------Components
// Button

export const Button = styled.button`
    max-width: auto;
    padding: 1.4rem 2.4rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.button.primary};
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;

    &:hover,
    &:active {
        box-shadow: 0 2rem 2rem 0 rgb(132, 144 ,255 / 30%); 
        transform: scale(0.96);
    }
    
    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.8rem;
    }    
`;