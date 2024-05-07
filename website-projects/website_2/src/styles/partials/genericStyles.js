import { css } from "styled-components";
import { bp, mediaQ } from "../utilities/mediaQ";

//------------------------------------------------------

export const genericStyles = css`

    /*====#### TYPOGRAPHY ####====*/

    h1 {
        color: ${({ theme }) => theme.colors.text.primary};
        font-size: 6rem;
        font-weight: 900;
    }

    h2 {
        color: ${({ theme }) => theme.colors.text.primary};
        font-size: 4.4rem;
        font-weight: 300;
        text-align: center;
        white-space: normal;
    }

    h3 {
        font-size: 1.8rem;
        font-weight: 400;
    }

    p {
        color: ${({ theme }) => theme.colors.text.secondary};
        font-size: 1.65rem;
        font-weight: 400;
        line-height: 1.5;
        margin-top: 1rem;
        opacity: 0.7;
    }

    a,
    a:visited,
    a:active {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    /* ====#### LAYOUTS ####==== */

    .container {
        max-width: 120rem;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .common-heading {
        font-size: 3.8rem;
        font-weight: 600;
        margin-bottom: 6rem;
    }

    .grid {
        display: grid;
        gap: 9rem;
    }

    .grid-two-column {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-three-column {
        grid-template-columns: repeat(3, 1fr);
    }

    .grid-four-column {
        /* grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr; */
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    /* ====#### FORMS STYLING ####==== */

    input, textarea {
        max-width: 50rem;
        padding: 1.6rem 2.4rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.text.primary};
        border: 0.1rem solid ${({ theme }) => theme.colors.secondary.main};
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        resize: none;
        outline: none;
    }

    input[type="submit"] {
        width: 16rem;
        margin-top: 2rem;
        padding: 1.4rem 2.2rem;
        text-transform: uppercase;
        background-color: ${({ theme }) => theme.colors.button.primary};
        color: #fff;
        font-size: 1.8rem;
        border: 0.1rem solid transparent;
        cursor: pointer;

        &:hover {
            background-color: #fff;
            color: ${({ theme }) => theme.colors.button.primary};
            border: 0.1rem solid ${({ theme }) => theme.colors.button.primary};
            transform: scale(0.9);
        }
    }

    /*====#### MEDIA QUERIES ####====*/

    ${mediaQ("down", bp.md)} {
        
        .container {
            padding: 0 3.2rem;
        }

        .grid-three-column {
            grid-template-columns: 1fr 1fr;
        }

    }

    ${mediaQ("down", bp.sm)} {
        .container {
            padding: 0 3.2rem;
        }
        
        .grid {
            gap: 3.2rem;         
        }

        .grid-two-column, .grid-three-column, .grid-four-column {
            grid-template-columns: 1fr;
        }

    }
    
`;