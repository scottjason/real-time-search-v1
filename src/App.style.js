import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
  /* https://css-tricks.com/books/volume-i/scale-typography-screen-size */
  body {
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));  
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));
    background-color: white;
    font-family: 'Open Sans', sans-serif;
  }
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  background-color: white;
`

export default GlobalStyles;