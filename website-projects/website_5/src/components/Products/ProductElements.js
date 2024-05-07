import styled from "styled-components";

export const ProductsContainer = styled.div`
    min-height: 100vh;
    background-color: #150f0f;
    color: #fff;
    padding: 4rem;

    @media screen and (max-width: 724px) {
        padding: 1.5rem 0;
    }
`

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    `

export const ProductWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
`

export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 308px;
`

export const ProductImg = styled.img`
    height: 300px;
    width: 300px;
    box-shadow: 8px 8px #fdc500;
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`

export const ProductTitle = styled.h2`
    font-size: 1.75rem;
    font-weight: 400;
`

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
    min-height: 100px;
    `

export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`

export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background-color: #e31837;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover {
        background-color: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`