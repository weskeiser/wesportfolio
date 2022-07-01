import { Dispatch, RefObject } from "react";
import styled from "styled-components";
import ViewSelect from "./ViewSelect";

interface Header {
  refsAndDispatch: {
    skillsRef: RefObject<HTMLInputElement>;
    aboutRef: RefObject<HTMLInputElement>;
    projectsRef: RefObject<HTMLInputElement>;
    viewDispatch: Dispatch<string>;
  };
}

const Header = ({ viewDispatch }: Header) => {
  return (
    <Wrapper>
      <h1>Wes Keiser</h1>
      <ViewSelect viewDispatch={viewDispatch} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.page};
  background-color: rgba(111, 111, 111, 0.5);
  height: ${({ theme }) => theme.heights.header};
  display: grid;
  margin-bottom: 2.7em;

  & > h1 {
    color: ${({ theme }) => theme.colors.footerBackground};
    /* background-color: ${({ theme }) => theme.colors.page}; */
    font-size: 2em;
    padding-left: 0.4em;
    grid-row: 1;
  }

  & > form {
    grid-row: 1;
    display: flex;

    & > input {
      width: 3em;
    }
  }
`;

export default Header;
