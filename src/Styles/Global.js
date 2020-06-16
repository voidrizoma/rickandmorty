import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
  }
  body {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  h1{
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
