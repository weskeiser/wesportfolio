import { Dispatch, RefObject } from "react";
import styled from "styled-components";
import ViewSelect from "./ViewSelect";

interface Header {
  view: string;
  viewDispatch: Dispatch<string>;
}

const Header = ({ view, viewDispatch }: Header) => {
  return (
    <Wrapper>
      <h1>Wes Keiser</h1>
      <ViewSelect view={view} viewDispatch={viewDispatch} />
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
  border-bottom: 1px solid grey;

  & > h1 {
    margin: auto 0;
    margin-left: 0.4em;
    color: ${({ theme }) => theme.colors.footerBackground};
    font-size: 1.5em;
    grid-row: 1;
  }

  & > fieldset {
    border: none;
    grid-row: 1;
    display: flex;

    & > input {
      width: 3em;
      border: none;
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.page};
      margin-bottom: 1px;

      :nth-of-type(1) {
        transform: rotate(270deg);
      }

      :nth-of-type(2) {
        transform: rotate(90deg);
      }
    }

    & > label {
      margin: auto 0;
      text-transform: capitalize;
    }
  }
`;

export default Header;
