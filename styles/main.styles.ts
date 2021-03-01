import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: "Post Grotesk Regular";
    background: #113899;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }


  body {
    font-size: 14px;
  }
  
  main {
    padding: 80px 30px 30px 30px;
    height: calc(200vh - 120px);
  }
`;
