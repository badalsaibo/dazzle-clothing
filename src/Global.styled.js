import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 2rem 4rem;
    max-width: 120rem;
    margin: 0 auto;

    @media only screen and (max-width: 44em) {
      padding: 2rem 2rem;
    }
  }
`;