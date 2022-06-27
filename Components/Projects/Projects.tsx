import { commonStyle } from "Components/Views/commonStyle";
import { forwardRef, ForwardRefRenderFunction } from "react";
import styled, { css } from "styled-components";

interface Projects {
  view: string;
  ref: ForwardRefRenderFunction<HTMLInputElement, {}>;
}

const Projects = forwardRef(({ view }: Projects, projectsRef) => {
  return (
    <Section ref={projectsRef} view={view}>
      <h2>Prosjekter</h2>

      <hr />

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

  hr {
    color: red;
    margin: 0;
    margin-bottom: 0.7em;
    width: 9em;
  }

  h2 {
    color: ${(props: Projects) =>
      props.view === "projects" ? titleColor1 : "red"};
  }
`;

export default Projects;
