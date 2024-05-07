// Dependencies
import styled, { createGlobalStyle } from "styled-components";

//----------------------------------------------------------------
// Global Styles

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
        user-select: none;
    }
`;

//----------------------------------------------------------------
// Global Components

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 50px;

    @media screen and (max-width: 991px) {
        padding: 0 30px;
    }
`;

export const Button = styled.button`
    border-radius: 4px;
    background-color: ${(props)=>(props.primary? "#4B59F7":"#0467FB")};
    white-space: nowrap;
    padding: ${(props)=>(props.big? "12px 64px":"10px 20px")};
    color: #fff;
    font-size: ${(props)=>(props.fontBig? "20px":"16px")};
    outline: none;
    cursor: pointer;
    border: none;

    &:hover{
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${(props)=>(props.primary?"#0467FB":"#4B59F7")};
    }
`;