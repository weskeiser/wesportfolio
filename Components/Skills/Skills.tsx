import { commonStyle } from "Components/Views/commonStyle";
import { forwardRef, ForwardRefRenderFunction } from "react";
import styled, { css } from "styled-components";

interface Skills {
  view: string;
  ref: ForwardRefRenderFunction<HTMLInputElement, {}>;
}

const Skills = forwardRef(({ view }: Skills, skillsRef) => {
  return (
    <Wrapper ref={skillsRef} view={view}>
      <h2>Ferdigheter</h2>

      <hr />

      <ul>
        <br />
        <li>HTML</li>
        <li>CSS/SCSS</li>
        <li>Styled Components</li>

        <br />
        <li>JavaScript/TypeScript</li>
        <li>React.js</li>

        <br />
        <li>Git</li>
        <li>VIM</li>
      </ul>
    </Wrapper>
  );
});

const titleColor1 = css`
  ${({ theme }) => theme.colors.titleColor1}
`;

const Wrapper = styled.div`
  ${commonStyle}

  border: 1px solid black;

  hr {
    color: red;
    margin: 0;
    margin-bottom: 0.7em;
    width: 10em;
  }

  h2 {
    color: ${(props: Skills) =>
      props.view === "skills" ? titleColor1 : "red"};
  }

  ul {
    list-style: none;
  }
`;

export default Skills;
