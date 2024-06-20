import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: #333;
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
