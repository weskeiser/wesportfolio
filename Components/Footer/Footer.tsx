import Contact from 'Components/Contact';
import Photo from 'Components/Photo';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <Contact />
      <Photo />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;

  border-top: 1px solid #333626;
  background-color: #333626;
  display: flex;
  height: 12em;
`;

export default Footer;
