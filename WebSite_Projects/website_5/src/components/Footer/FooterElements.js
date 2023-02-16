import styled from "styled-components";

export const FooterContainer = styled.footer`
    min-height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0a0607;
    color: #fff;
`

export const FooterWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    padding: 2rem;

    @media screen and (max-width: 724px) {
        width: 100%;
        display: block;
        text-align: center;
    }
`

export const SocialMedia = styled.section`
    font-size: 2rem;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    gap: 1rem;
    
    @media screen and (max-width: 724px) {
        justify-content: center;
        margin-top: 1rem;
    }
`