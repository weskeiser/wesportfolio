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

      <div>{view === "skills" && <hr />}</div>

      <ul>
        <li>JavaScript/TypeScript</li>
        <li>React.js/Next.js</li>

        <br />
        <li>HTML</li>
        <li>CSS/SCSS</li>
        <li>Styled Components</li>

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

  h2 {
    color: ${(props: Skills) =>
      props.view === "skills" ? titleColor1 : "#c9bf94"};
  }

  div {
    margin: 0;
    margin-bottom: 1em;
    width: 10em;

    hr {
      color: ${titleColor1};
    }
  }

  ul {
    list-style: none;
  }
`;

export default Skills;
