// Deps
import styled from "styled-components";

//--------------------------------------Footer Container

export const FooterMainContainer = styled.footer`

    .contact-card {
        max-width: 50vw;
        margin: 0 auto;
        padding: 5rem 10rem;
        transform: translateY(50%);
        background-color: ${({ theme }) => theme.colors.background.default};
        border-radius: 1rem;
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};

        &__grid div:last-child {
            justify-self: end;
            align-self: stretch;
        }
    }

    .footer {
        background-color: ${({ theme }) => theme.colors.primary.darker};
        padding: 14rem 0 9rem 0;

        h3 {
            color: #fff;
            margin-bottom: 2.4rem;
        }
        
        p {
            color: #fff
        }
        
        a {
            color: #fff;
            font-size: 1.8rem;

            &:hover {
                color: ${({ theme }) => theme.colors.action.hover};
            }
        }

        hr {
            margin: 5rem 0;
            color: ${({ theme }) => theme.colors.divider};
            height: 0.1px;
        }
    }

    

    .footer--upper {
        text-align: center;

        &--subscribe {
            
            form {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                
                input {
                    width: 100%;
                }
            }
        }

        &--social .social-icons{
            display: flex;
            justify-content: center;
            gap: 2rem;
                
            .icons {
                color: #fff;
                font-size: 4rem;
                position: relative;
                padding: 0.5rem;
                border-radius: 50%;
                border: 0.2rem solid #fff;

                &:hover {
                    color: ${({ theme }) => theme.colors.action.hover};
                    border-color: ${({ theme }) => theme.colors.action.hover};
                }
            }
            
        }
    }

    .footer--bottom {
            
            .footer-bottom-links {
                display: block;
                margin: 0.5rem 0;
            }

            .grid {
                align-items: center;
                
                & div:last-child {
                    justify-self: end;
                }
            }
    }
`;