import { css } from "styled-components";

export const commonStyle = css`
  scroll-margin-top: calc(${({ theme }) => theme.heights.header} + 1em);

  margin-bottom: 2em;

  & > * {
    margin: 0 1em;
  }
`;
