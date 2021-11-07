import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Work Sans, Roboto, sans-serif, serif;
    background: #E5E5E5;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 16px;
    font-weight: normal;
    font-style: normal;
  }
`;

const globalTheme = {
  grey: '#D4D4D4',
  white: '#ffffff',
  green: '#339933',
  fontGreen: '#65B366',
  darkerWhite: '#F8F8F8',
  lightGrey: '#DEDEDE',
  focusGrey: '#323A63',
  hoverGrey: '#9FB4B4',
  borderGrey: '#DFDFDF',
  hoverGreen: '#99CC98',
  textGrey: '#9FA2B4',
  hoverTextGreen: '#4EA64C',
  iconBG: '#CDCFD1',
  black: '#000000',
  iconHoverBG: '#EFEFEF',
  displayTextBG: '#F1F5F5'
};

export { GlobalStyle, globalTheme };
