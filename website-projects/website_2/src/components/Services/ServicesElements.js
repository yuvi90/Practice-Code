// Deps
import styled from 'styled-components';


//-----------------------------------------------Main Container

export const MainContainer = styled.section`
    padding: 9rem 0;
    background-color: ${({ theme }) => theme.colors.background.default};

    .container {
        max-width: 120rem;

        .card {
            border: 0.1rem solid rgb(0 0 0/ 20%);

            .card-data {
                padding: 0 2rem;
            }

            h3 {
                margin: 2rem 0;
                font-size: 2.4rem;
                font-weight: 300;
            }

            .btn-readmore {
                margin: 2rem 2rem;
                background-color: #fff;
                color: rgb(98 84 243);
                border: 0.1rem solid ${({ theme }) => theme.colors.button.primary};
                font-size: 1.4rem;

                &:hover {
                    background-color: ${({ theme }) => theme.colors.button.primary};
                    color: #fff;
                }
            }
        }
        
    }

    figure {
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        transition: all 0.5s linear;
        
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            transition: all 0.2s linear;
            cursor: pointer;
        }

        &:hover::after {
            width: 100%;
        }

        &:hover img {
            transform: scale(1.2);
        }

        img {
            max-width: 90%;
            margin-top: 1.5rem;
            height: 20rem;
            transition: all 0.2s linear;
        }
    }

`;