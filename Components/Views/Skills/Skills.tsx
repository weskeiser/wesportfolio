import { commonStyle } from "Components/Views/commonStyle";
import { ForwardedRef, forwardRef, Ref } from "react";
import styled, { css } from "styled-components";

interface Skills {
  viewMemo: string;
  ref: Ref<HTMLElement>;
}

const Skills = forwardRef(
  ({ viewMemo }: Skills, skillsRef: ForwardedRef<HTMLElement>) => {
    return (
      <Wrapper ref={skillsRef} viewMemo={viewMemo}>
        <h2>Ferdigheter</h2>

        <div>
          <hr />
        </div>

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
  }
);

const titleColor1 = css`
  ${({ theme }) => theme.colors.titleColor1}
`;

const Wrapper = styled.section`
  ${commonStyle}

  h2 {
    color: ${(props: Skills) =>
      props.viewMemo === "skills" ? titleColor1 : "#c9bf94"};
  }

  div {
    margin: 0;
    margin-bottom: 1em;
    width: 10em;

    hr {
      color: ${({ viewMemo }) =>
        viewMemo === "skills" ? titleColor1 : "transparent"};
    }
  }

  ul {
    list-style: none;
  }
`;

export default Skills;
