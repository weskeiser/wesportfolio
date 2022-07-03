import { css } from "styled-components";

const titleColor1 = css`
  ${({ theme }) => theme.colors.titleColor1}
`;

export const commonStyle = css`
  scroll-margin-top: calc(${({ theme }) => theme.heights.header} + 1em);
  line-height: 1.5em;

  & > * {
    margin: 0 1em;
  }

  & > ul {
    list-style: none;

    li {
      margin-bottom: 0.5em;

      p {
        ::before {
          content: "‒";
          margin-right: 0.5em;
          color: ${({ theme }) => theme.colors.titleColor1};
        }
      }
    }
  }

  & > hr {
    color: transparent;
    border-bottom: 2px solid ${titleColor1};
    margin: 2em 0;
  }

  @media only screen and (min-width: 748px) {
    & > * {
      margin: 0 5em;
    }

    & > hr {
      margin-top: 4em;
      margin-bottom: 2.5em;
    }
  }
`;

export const dynamicDivider = css`
  margin: 0;
  margin-bottom: 1.5em;

  hr {
    color: transparent;
  }
`;
