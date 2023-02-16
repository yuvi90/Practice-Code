// Dependencies
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/GlobalStyles";

//-------------------------------Components
// Container

export const FooterContainer = styled.footer`
    background-color: #101522;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 0 2rem 0;
`;

//-------------------------------Components
// Newsletter

export const SubcriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    margin-bottom: 24px;
    text-align: center;

    p {
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Sans Grande", "Lucida Sans", Arial, sans-serif;
        margin-bottom: 24px;
        font-size: 24px;
    }

    .SubText {
        font-size: 20px;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        
        @media screen and (max-width: 991px) {
            flex-direction: column;
            width: 60%;
        }
    }

    .emailInput {
        outline: none;
        font-size: 16px;
        padding: 11px 20px;
        border-radius: 2px;
        border: 1px solid #fff;

        &::placeholder {
            color: #242424;
        }

        @media screen and (max-width: 991px) {
            width: 100%;
        }
    }
`;

export const SubscribeBtn = styled(Button)`
    border: none;

    @media screen and (max-width: 991px) {
            width: 100%;
        }
`;


//-------------------------------Components
//FooterLinks

export const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
`;

export const FooterLinksWrapper = styled.div`
    width: 100%;
    display: flex;
    
    @media screen and (max-width: 991px) {
        flex-direction: column;
    }
    
    .Footer-Links-Items {
        display: flex;
        flex-direction: column;
        gap: 14px;
        align-items: center;
        text-align: center;
        width: 250px;
        padding: 20px;

        @media screen and (max-width: 991px) {
            width: 100%;
        }

        h1 {
            @media screen and (max-width: 991px) {
               font-size: 24px;
            }
        }
    }
`;

export const FooterLinks = styled(Link)`
    color: #fff;
    text-decoration: none;

    &:hover {
        color: #0467fb;
        transition: all 0.3s ease-out;
    }
`;