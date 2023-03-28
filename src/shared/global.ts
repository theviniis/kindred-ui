import { createGlobalStyle } from 'styled-components';
import { createCSSVariables } from '../utils/createCSSVariables';
import { typesystem } from './theme';

export const fontUrl =
  'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: ${typesystem.body.lg.fontFamily};
  }
  :focus:not(:focus-visible) {
    outline: none;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    margin-block: 0;
    margin-inline: 0;
    padding: 0;
    padding-block: 0;
    padding-inline: 0;
  }
  ul, li {
    list-style: none;
  }
  button {
    border: none;
    background: none;
    box-sizing: border-box;
    cursor: pointer;
  }
  input, fieldset {
    font: inherit;
    border: none;
    background: none;
    outline: none;
    overflow: hidden;
    color: currentColor;
  }
  label, span {
    display: inline-block;
  }
  img {
    display: block;
    width: 100%;
  }

  ${({ theme }) => createCSSVariables({ theme })};
`;
