import Contact from "Components/Contact";
import Photo from "Components/Photo";
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
`;

export default Footer;
