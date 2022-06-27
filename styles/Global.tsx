import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* height: 100%; */
}

html {
  /* height: 100%; */
  font-family: Arial, Helvetica, sans-serif;
  // Apple SD Gothic Neo
}

main {
  margin-bottom: 10em;
}

body {
  /* height: 100%; */
  // REMOVE AFTER DEV
  touch-action: none;
}
`;
