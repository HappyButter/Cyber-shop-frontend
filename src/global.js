import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    scroll-behavior: smooth;
    
    color: rgba(255,255,255,.75);
    font-family: Lato, sans-serif;

  }    
`