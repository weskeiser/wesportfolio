import { commonStyle } from "Components/Views/commonStyle";
import { forwardRef, ForwardRefRenderFunction } from "react";
import styled, { css } from "styled-components";
import { useInView } from "react-intersection-observer";

interface Projects {
  view: string;
  ref: ForwardRefRenderFunction<HTMLInputElement, {}>;
}

const Projects = forwardRef(({ view }: Projects, projectsRef) => {
  return (
    <Section ref={projectsRef} view={view}>
      <h2>Prosjekter</h2>

      <div>{view === "projects" && <hr />}</div>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore optio
        soluta aliquam labore! Quia ipsam, ipsa excepturi libero, soluta
        molestias cum accusantium consequatur, aliquam amet iste praesentium
        possimus ab natus facilis tenetur consectetur! Natus illo hic incidunt
        magnam eligendi possimus dolor quae, ducimus omnis reprehenderit at
        aliquid exercitationem quam veritatis!
      </p>
    </Section>
  );
});

const titleColor1 = css`
  ${({ theme }) => theme.colors.titleColor1}
`;

const Section = styled.section`
  ${commonStyle};

  h2 {
    color: ${(props: Projects) =>
      props.view === "projects" ? titleColor1 : "#c9bf94"};
  }

  div {
    margin: 0;
    margin-bottom: 1em;
    width: 9em;

    hr {
      color: ${titleColor1};
    }
  }
`;

export default Projects;
