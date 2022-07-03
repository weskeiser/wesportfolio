import { ForwardedRef, forwardRef, Ref } from "react";
import styled, { css } from "styled-components";
import { commonStyle, dynamicDivider } from "../commonStyle";

interface Intro {
  viewMemo: string;
  ref: Ref<HTMLElement>;
}

const Intro = forwardRef(
  ({ viewMemo }: Intro, introRef: ForwardedRef<HTMLElement> | null) => {
    return (
      <Section ref={introRef} viewMemo={viewMemo}>
        <h2>Introduksjon</h2>

        <div>
          <hr />
        </div>

        <ul>
          <li>
            <p>Selvlært frontend-utvikler med base i Oslo.</p>
          </li>
          <li>
            <p>
              Brenner for å skape gode brukeropplevelser ved å utvikle
              applikasjoner med intuitive design og brukerne i fokus.
            </p>
          </li>
          <li>
            <p>Høyt dedikert, selvdreven og lærevillig.</p>
          </li>
          <li>
            <p>
              Åpen for in-house eller konsulentarbeid, både fysisk og remote.
            </p>
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
  --dynamicDividerWidth: 10em;

  ${commonStyle};

  h2 {
    color: ${({ viewMemo }: { viewMemo: string }) =>
      viewMemo === "intro" ? titleColor1 : "#c9bf94"};
    font-family: Mukta-SemiBold;
  }

  & > div {
    ${dynamicDivider}
    width: var(--dynamicDividerWidth);

    hr {
      border-bottom: 3px solid
        ${({ viewMemo }) =>
          viewMemo === "intro" ? titleColor1 : "transparent"};
    }
  }

  @media only screen and (min-width: 748px) {
    & > div {
      width: calc(var(--dynamicDividerWidth) * 1.6);
    }
  }
`;

export default Intro;
