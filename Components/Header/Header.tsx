import ViewSelect from "Components/ViewSelect";
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
      <h1>Wes Keiser</h1>

      <ViewSelect refsAndDispatch={refsAndDispatch} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  height: ${({ theme }) => theme.heights.header};

  h1 {
    font-size: 1.5em;
    border-bottom: 1px solid black;
    padding: 0.2em;
    padding-left: 0.4em;
  }
`;

export default Header;
