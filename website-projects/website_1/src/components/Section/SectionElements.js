// Dependencies
import styled from "styled-components";

//-------------------------------Components
// Section Main Container
export const SectionContainer = styled.section`
    background-color: ${({ lightBG }) => (lightBG ? "#fff" : "#101522")};
    color: #fff;
    padding: 160px 0;

    @media screen and (max-width: 991px) {
        padding: 60px 0;
    }
`;

//-------------------------------Components
// Row Wrapper

export const SectionRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

//-------------------------------Components
// Text Column

export const TextColumn = styled.div`
    max-width: 50%;
    flex-basis: 50%;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: ${({ alignStart }) => ( !alignStart ? "flex-start" : "flex-end" )};
    
    @media screen and (max-width: 991px) {
        max-width: 100%;
        flex-basis: 100%;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: ${({ alignStart }) => ( !alignStart ? "flex-start" : "flex-end" )};
    text-align: ${({ alignStart }) => ( !alignStart ? "start" : "end" )};

    @media screen and (max-width: 991px) {
        padding-bottom: 90px;
        align-items: flex-start;
        text-align: start;
    }
`;

export const TopLine = styled.h3`
    color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;

export const HeadLine = styled.h1`
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
    font-size: 48px;
    line-height: 1.1;
    margin-bottom: 24px;
`;

export const SubTitle = styled.p`
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
    font-size: 18px;
    line-height: 24px;
    max-width: 440px;
    margin-bottom: 35px;
`;

//-------------------------------Components
// Image Column

export const ImgColumn = styled.div`
    max-width: 50%;
    flex-basis: 50%;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: ${({ alignStart }) => ( alignStart ? "flex-start" : "flex-end" )};

    @media screen and (max-width: 991px) {
        max-width: 100%;
        flex-basis: 100%;
        justify-content: center;
    }
`;

export const ImgWrapper = styled.div`
    max-width: 540px;
`;

export const Img = styled.img`
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 540px;
`;