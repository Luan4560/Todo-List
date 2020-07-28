import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body {
    

    background: #232323;
    color: #fff;
    font-family: 'Poppins', sans-serif;
  }
`

export default GlobalStyle;