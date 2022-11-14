import { createGlobalStyle, css } from 'styled-components';
// import { typography } from './styles';

export const bodyStyles = css``;

export const fontUrl =
  'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap';

export const GlobalStyle = createGlobalStyle`
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
