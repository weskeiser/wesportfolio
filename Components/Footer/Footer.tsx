import Contact from "Components/Footer/Contact";
import Photo from "Components/Footer/Photo";
import styled, { css } from "styled-components";

const footerBackground = css`
  ${({ theme }) => theme.colors.footerBackground}
`;

const Footer = () => {
  return (
    <Wrapper>
      <Contact />
      <Photo />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: sticky;
  width: 100%;
  bottom: 0;

  border-top: 1px solid ${footerBackground};
  background-color: ${footerBackground};
  display: flex;
  height: 12em;
  padding-left: 1em;
  line-height: 1.5;
`;

export default Footer;
