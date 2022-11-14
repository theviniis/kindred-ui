import { createGlobalStyle, css } from 'styled-components';
import { typography } from './theme';
// import { typography } from './styles';

export const bodyStyles = css`
  font-family: ${typography.type};
  /* background-color: ${({ theme }) => theme.body}; */
  /* color: ${({ theme }) => theme.fontColor}; */
`;

export const fontUrl =
  'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    ${bodyStyles}
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
`;
