import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
  scroll-behavior: smooth;
  }
  
  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: #333;
  }

  h1, h2, h3 {
    font-family: "Poppins", sans-serif;
    color: #222; 
  }

  h1 {
    font-weight: bold;
    font-size: 2.5rem;
  }

  p {
    line-height: 2;
    font-size: 1rem; 
    font-family: open-sans; ${"" /* is this correct???? */}
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  main {
    flex: 1;
  }

`;

export default GlobalStyles;
