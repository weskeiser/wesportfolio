import ViewSelect from "Components/ViewSelect";
import Image from "next/image";
import { Dispatch, RefObject } from "react";
import styled from "styled-components";

interface Header {
  refsAndDispatch: {
    skillsRef: RefObject<HTMLInputElement>;
    aboutRef: RefObject<HTMLInputElement>;
    projectsRef: RefObject<HTMLInputElement>;
    viewDispatch: Dispatch<string>;
  };
}

const Header = ({ refsAndDispatch }: Header) => {
  return (
    <Wrapper>
      <Image src="/wk-icon.png" width="70" height="40" />
      <h1>Wes Keiser</h1>

      <ViewSelect refsAndDispatch={refsAndDispatch} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.page};
  height: ${({ theme }) => theme.heights.header};
  display: grid;
  margin-bottom: 2.7em;

  img {
    grid-column: 1;
    grid-row: 1;
  }

  h1 {
    color: ${({ theme }) => theme.colors.footerBackground};
    /* background-color: ${({ theme }) => theme.colors.page}; */
    font-size: 2em;
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.titleColor1}; */
    /* border-right: 1px solid ${({ theme }) => theme.colors.titleColor1}; */
    /* border-radius: 0 0 1em 0; */
    /* padding: 0.25em; */
    padding-left: 0.4em;
    grid-row: 1;
    grid-column: 4;
  }
`;

export default Header;
