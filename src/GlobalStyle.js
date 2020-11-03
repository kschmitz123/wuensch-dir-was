import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *,*::after,*::before {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif; 
    font-size: 16px;
     -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale; 
    background: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default GlobalStyle;
