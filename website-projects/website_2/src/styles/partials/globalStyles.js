import { css } from "styled-components";

//------------------------------------------------------

export const globalStyles = css`

    html {
        font-size: 62.5%; /*===== Converting 1rem to 10px =====*/
        overflow-x: hidden;
        box-sizing: border-box;
        /* scroll-behaviour: smooth; */
    }
    
    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        font-family: ${({ theme }) => theme.typo.fontFamily};
        user-select: none;
    }

    ::-webkit-scrollbar {
        width: 1.5rem;
    }

    ::-webkit-scrollbar-track {
        background-color: #000;
    }

    ::-webkit-scrollbar-thumb {
        background: #fff;
        border: 5px solid transparent;
        border-radius: 9px;
        background-clip: content-box;
    }

`;