// Deps
import styled from "styled-components";
// Components
import { Button } from "../../styles/GlobalComponents";

//-----------------------------------------------Main Container

export const RootHeroContainer = styled.section`
    padding: 10rem 0;

    .section-hero-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .btn {
        max-width: 16rem;
    }

    .hero-topline {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        color: ${({theme}) => theme.colors.secondary.main};
    }

    .hero-heading {
        text-transform: uppercase;
        font-size: 6.4rem;
    }

    .hero-para {
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
    }

    .section-hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
        
        picture {
            text-align: end;
        }

        img {
            max-width: 80%;
        }
    }
`;

//-----------------------------------------------Button

export const HeroButton = styled(Button)`

    &:hover, 
    &:active {
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    }

`;