import Contact from "Components/Footer/Contact";
import ProfilePhoto from "Components/Footer/ProfilePhoto";
import styled, { css } from "styled-components";

const footerBackground = css`
  ${({ theme }) => theme.colors.footerBackground}
`;

const Footer = () => {
  return (
    <Wrapper>
      <Contact />
      <ProfilePhoto />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;

  border-top: 1px solid ${footerBackground};
  background-color: ${footerBackground};
  display: flex;
  height: ${({ theme }) => theme.heights.footer};
  padding-left: 1em;
  line-height: 1.5;
`;

export default Footer;
