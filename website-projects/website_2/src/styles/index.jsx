// Deps
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from "styled-components";
import PropTypes from 'prop-types';
// Partial Styles
import { globalStyles, genericStyles } from "./partials";
import { theme } from './config';

//--------------------------------------------------------

ThemeProvider.prototype = {
    children: PropTypes.node,
};

const GlobalCSS = createGlobalStyle`
    ${globalStyles};
    ${genericStyles};
`;

export default function ThemeProvider({ children }) {

    return (
        <StyledThemeProvider theme={theme}>
            <GlobalCSS />
            {children}
        </StyledThemeProvider>
    )
};