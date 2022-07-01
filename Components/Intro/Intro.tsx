import { commonStyle } from "Components/Views/commonStyle";
import { forwardRef, ForwardRefRenderFunction } from "react";
import styled, { css } from "styled-components";

interface Intro {
  view: string;
  ref: ForwardRefRenderFunction<HTMLInputElement, {}>;
}

const Intro = forwardRef(({ view }: Intro, introRef) => {
  return (
    <Section ref={introRef} view={view}>
      <h2>Introduksjon</h2>

      <div>{view === "intro" && <hr />}</div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        perspiciatis nam, exercitationem hic adipisci iste architecto qui in
        vel, modi porro veniam odit nesciunt eos assumenda laborum odio iusto
        expedita tempore aliquid vitae quos quam. Recusandae rem deserunt illo,
        ratione adipisci in ipsa veniam, tenetur fugiat libero quae deleniti
        praesentium.
      </p>
    </Section>
  );
});

const titleColor1 = css`
  ${({ theme }) => theme.colors.titleColor1}
`;

const Section = styled.section`
  ${commonStyle};

  div {
    margin: 0;
    margin-bottom: 1em;
    width: 11em;

    hr {
      color: ${titleColor1};
    }
  }

  h2 {
    color: ${(props: Intro) =>
      props.view === "intro" ? titleColor1 : "#c9bf94"};
  }
`;

export default Intro;
