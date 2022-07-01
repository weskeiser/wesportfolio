import { Dispatch } from "react";
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
  display: flex;
  border-bottom: 1px solid rgb(191, 173, 108, 0.5);

  & > h1 {
    margin: auto 0;
    margin-left: 0.4em;
    color: ${({ theme }) => theme.colors.footerBackground};
    color: #60693a;
    font-size: 1.5em;
    font-family: Mukta-SemiBold;
    font-weight: 600;
  }
`;

export default Header;
