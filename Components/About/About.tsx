import { commonStyle } from "Components/Views/commonStyle";
import { forwardRef, ForwardRefRenderFunction } from "react";
import styled, { css } from "styled-components";

interface About {
  view: string;
  ref: ForwardRefRenderFunction<HTMLInputElement, {}>;
}

const About = forwardRef(({ view }: About, aboutRef) => {
  return (
    <Section ref={aboutRef} view={view}>
      <h2>Introduksjon</h2>

      <div>{view === "about" && <hr />}</div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iusto
        debitis hic. Sequi unde cum at temporibus sapiente aut aspernatur, harum
        officia provident dignissimos dicta est quo nemo architecto, atque
        soluta saepe eveniet possimus eaque esse reiciendis omnis. Rem
        repudiandae cumque est dolorem blanditiis at dolorum debitis vero et
        omnis?
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
    color: ${(props: About) =>
      props.view === "about" ? titleColor1 : "#c9bf94"};
  }
`;

export default About;
