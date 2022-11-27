import { createGlobalStyle } from 'styled-components';
import { typography } from './theme';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-family: ${typography.type.primary};
  }
  body {
    font-family: ${typography.type.primary};
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.fontColor};
  }
  :focus:not(:focus-visible) {
    outline: none;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ul, li {
    list-style: none;
  }
  button {
    all: unset;
  }
`;
