import { commonStyle } from "Components/Views/commonStyle";
import { ForwardedRef, forwardRef, Ref, RefObject } from "react";
import styled, { css } from "styled-components";

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

        <p>Selvlært frontend-utvikler med tilholdssted Oslo.</p>
        <p>
          Brenner for å skape gode brukeropplevelser ved å bygge intuitive
          design med brukeren i fokus.
        </p>
        <p>Høyt dedikert, selvdreven og lærevillig.</p>

        <p>Åpen for in-house eller konsulentarbeid, både fysisk og remote.</p>
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
    color: ${(props: Intro) =>
      props.viewMemo === "intro" ? titleColor1 : "#c9bf94"};
    font-family: Mukta-SemiBold;
  }

  div {
    margin: 0;
    margin-bottom: 1em;
    width: 11em;

    hr {
      color: transparent;
      border-bottom: 2px solid
        ${({ viewMemo }) =>
          viewMemo === "intro" ? titleColor1 : "transparent"};
    }
  }
`;

export default Intro;
