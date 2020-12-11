import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --white: #fff;
    --black: #000;
  }
  
  *{
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body{
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
