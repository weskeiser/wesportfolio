import FooterIcons from 'Components/FooterIcons';
import Image from 'next/image';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <h2>Wes Keiser</h2>
      <h3>front-end utvikler</h3>

      <hr />

      <a href="mailto:wes@weskeiser.no/">wes@weskeiser.no</a>
      <br />
      <a href="+4746121065">+47 461 21 065</a>
      <FooterIcons />
    </Wrapper>
  );
};

const Wrapper = styled.address`
  font-style: normal;
  width: 100%;
  color: #c3b890;
  margin: 1em 0;
  text-align: center;

  hr {
    border: 1px solid #9e9573;
    margin: 1em 0;
  }

  a,
  a:visited {
    color: inherit;
  }
`;

export default Contact;
