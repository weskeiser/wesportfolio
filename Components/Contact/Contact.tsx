import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <h2>Kontakt</h2>

      <h3>Wes Keiser</h3>

      <a href="mailto:wes@weskeiser.no/">wes@weskeiser.no</a>
      <br />
      <a href="+4746121065">+4746121065</a>
    </Wrapper>
  );
};

const Wrapper = styled.address`
  border: 1px solid black;
`;

export default Contact;
