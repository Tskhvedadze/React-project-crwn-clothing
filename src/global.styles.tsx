import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

   *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   body {
      padding: 20px 40px;
      font-family: 'Poppins', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      @media screen and (max-width: 800px){
         padding: 10px;
      }
   }

   a {
      text-decoration: none;
      color: black;
   }

   code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
         monospace;
   }

`
