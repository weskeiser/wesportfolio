import { commonStyle, dynamicDivider } from "Components/Views/commonStyle";
import { ForwardedRef, forwardRef, Ref } from "react";
import styled, { css } from "styled-components";

interface Skills {
  viewMemo: string;
  ref: Ref<HTMLElement>;
}

const Skills = forwardRef(
  ({ viewMemo }: Skills, skillsRef: ForwardedRef<HTMLElement>) => {
    return (
      <Section ref={skillsRef} viewMemo={viewMemo}>
        <h2>Ferdigheter</h2>

        <div>
          <hr />
        </div>

        <ul>
          <li>
            <p>JavaScript/TypeScript</p>
          </li>

          <li>
            <p>React.js</p>
          </li>

          <li>
            <p>HTML</p>
          </li>
          <li>
            <p>CSS/SCSS</p>
          </li>
          <li>
            <p>Styled Components</p>
          </li>

          <li>
            <p>Git</p>
          </li>
          <li>
            <p>VIM</p>
          </li>
        </ul>

        <hr />
      </Section>
    );
  }
);

const titleColor1 = css`
  ${({ theme }) => theme.colors.titleColor1}
`;

const Section = styled.section`
  --dynamicDividerWidth: 9.4em;

  ${commonStyle}

  h2 {
    color: ${({ viewMemo }: { viewMemo: string }) =>
      viewMemo === "skills" ? titleColor1 : "#c9bf94"};
    font-family: Mukta-SemiBold;
  }

  & > div {
    ${dynamicDivider}
    width: var(--dynamicDividerWidth);

    hr {
      border-bottom: 3px solid
        ${({ viewMemo }) =>
          viewMemo === "skills" ? titleColor1 : "transparent"};
    }
  }

  @media only screen and (min-width: 748px) {
    & > div {
      width: calc(var(--dynamicDividerWidth) * 1.65);
    }
  }
`;

export default Skills;
