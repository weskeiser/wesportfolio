import { commonStyle, dynamicDivider } from "Components/Views/commonStyle";
import { ForwardedRef, forwardRef, ForwardRefRenderFunction, Ref } from "react";
import styled, { css } from "styled-components";

interface Projects {
  viewMemo: string;
  ref: Ref<HTMLElement>;
}

const Projects = forwardRef(
  ({ viewMemo }: Projects, projectsRef: ForwardedRef<HTMLElement>) => {
    return (
      <Section ref={projectsRef} viewMemo={viewMemo}>
        <h2>Prosjekter</h2>

        <div>
          <hr />
        </div>

        <article>
          <h3>Måltidsplanlegger </h3>
          <a href="https://github.com/weskeiser/mealplanner">
            https://github.com/weskeiser/mealplanner
          </a>
          <p>
            En måltidsplanlegger med næringsinnholdkalkulator. Under utvikling.
          </p>
        </article>

        <article>
          <h3>Porteføljeside</h3>
          <a href="">githublink</a>
          <p>Kildekoden til dette porteføljenettstedet.</p>
        </article>

        <hr />
      </Section>
    );
  }
);

const titleColor1 = css`
  ${({ theme }) => theme.colors.titleColor1}
`;

const Section = styled.section`
  --dynamicDividerWidth: 8.45em;
  ${commonStyle};

  h2 {
    color: ${({ viewMemo }: { viewMemo: string }) =>
      viewMemo === "projects" ? titleColor1 : "#c9bf94"};
    font-family: Mukta-SemiBold;
  }

  & > div {
    ${dynamicDivider}
    width: var(--dynamicDividerWidth);

    hr {
      border-bottom: 3px solid
        ${({ viewMemo }) =>
          viewMemo === "projects" ? titleColor1 : "transparent"};
    }
  }

  & > article {
    margin-top: 2em;
    margin-bottom: 2em;
    border: 1px solid ${titleColor1};
    padding: 0.6em 1em;

    & > h3 {
      color: ${titleColor1};
      font-weight: 300;
      text-align: center;
    }

    a,
    a:visited {
      color: #c9bf94;
      display: block;
      margin-bottom: 1em;
      text-align: center;
      text-decoration: underline;
    }

    p {
      color: black;
    }
  }

  @media only screen {
    @media (min-width: 748px) {
      & > div {
        width: calc(var(--dynamicDividerWidth) * 1.7);
      }
    }

    @media (min-width: 1025px) {
    }
  }
`;

export default Projects;
