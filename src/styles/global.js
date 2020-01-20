import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        color: ${colors.gray};
        font-weight: normal;
        font-size: 14px;
        background-color: ${colors.white};
    }
`;