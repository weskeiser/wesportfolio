import SocialsIcons from "Components/Footer/Contact/SocialsIcons";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2>Wes Keiser</h2>
      <h3>front-end utvikler</h3>

      <a href="mailto:wes@weskeiser.no/">wes@weskeiser.no</a>
      <br />
      <a href="+4746121065">+47 461 21 065</a>
      <SocialsIcons />
    </Wrapper>
  );
};

const Wrapper = styled.address`
  font-style: normal;
  width: 100%;
  color: ${({ theme }) => theme.colors.footerText};
  margin: 1em 0;
  margin-left: 1em;

  h2 {
    font-size: 1.2em;
  }

  h3 {
    font-size: 1em;
    font-weight: 300;
    margin-bottom: 0.8em;
  }

  a,
  a:visited {
    color: inherit;
  }

  @media only screen {
    @media (min-width: 1025px) {
      margin: auto 0;
      text-align: center;

      h3 {
        margin-bottom: 1.2em;
      }

      @media (max-height: 685px) {
        margin: 1em 0;
      }
    }
  }
`;

export default Contact;
