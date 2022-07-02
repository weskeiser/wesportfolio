import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  font-family:  Helvetica, sans-serif;
  font-weight: 300;

  @font-face {
    font-family: Mukta-SemiBold;
    src: url('/fonts/mukta/Mukta-Light.ttf');
  }
}

body {
  // REMOVE AFTER DEV
  touch-action: none;
  background-color: ${({ theme }) => theme.colors.page}
}


main {
  /* margin-bottom: 12em; */
  height: 100vh;
}
`;
