import { commonStyle } from "Components/Views/commonStyle";
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

        <h3>
          Måltidsplanlegger -{" "}
          <a href="https://github.com/weskeiser/mealplanner">
            https://github.com/weskeiser/mealplanner
          </a>
        </h3>
        <p>Blabla</p>

        <h3>
          Porteføljeside - <a href="">githublink</a>{" "}
        </h3>
        <p>blabla</p>
      </Section>
    );
  }
);

const titleColor1 = css`
  ${({ theme }) => theme.colors.titleColor1}
`;

const Section = styled.section`
  ${commonStyle};

  h2 {
    color: ${(props: Projects) =>
      props.viewMemo === "projects" ? titleColor1 : "#c9bf94"};
    font-family: Mukta-SemiBold;
  }

  & > div {
    margin: 0;
    margin-bottom: 1em;
    width: 9em;

    hr {
      color: transparent;
      border-bottom: 2px solid
        ${({ viewMemo }) =>
          viewMemo === "projects" ? titleColor1 : "transparent"};
    }
  }
`;

export default Projects;
