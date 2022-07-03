import Contact from "Components/Footer/Contact";
import styled, { css } from "styled-components";

const footerBackground = css`
  ${({ theme }) => theme.colors.footerBackground}
`;

const Footer = () => {
  return (
    <Wrapper>
      <Contact />
      <img src="/images/profilephoto.png" alt="" />
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
  line-height: 1.5;

  @media only screen {
    @media (min-width: 1025px) {
      display: flex;
      flex-direction: column;
      top: 0;
      right: 0;
      bottom: 0;
      width: ${({ theme }) => theme.widths.footer1025};
      height: 100%;

      & > img {
        width: 100%;
        padding: 0;
        margin-top: auto;
      }
    }
  }
`;

export default Footer;
