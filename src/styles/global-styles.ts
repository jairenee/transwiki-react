import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Oswald";
    src: url('./fonts/Oswald-VariableFont_wght.ttf') format('truetype');
  }
 
  @font-face {
    font-family: "Source Sans Pro";
    src: url('./fonts/SourceSansPro-Light.ttf') format('truetype');
  }
 
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
