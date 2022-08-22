import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body, input, textarea, button, li, a{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    border: none;
    text-decoration: none;
    list-style: none;
  }
  
  :root{
    --color-primary: #ff577f;
    --color-primary-focus: #ff427f;
    --color-primary-negative: #59323f;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343b41;
    --grey-1: #868e96;
    --grey-0: #f8f9fa;

    --negative: #e83f5b;
    --sucess: #3fe864;
    --informative: #fbec5d
  }
`