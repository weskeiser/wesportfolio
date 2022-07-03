import { Dispatch } from "react";
import styled from "styled-components";
import ViewSelect from "./ViewSelect";

interface Header {
  viewMemo: string;
  viewDispatch: Dispatch<{ type: string }>;
}

const Header = ({ viewMemo, viewDispatch }: Header) => {
  return (
    <Wrapper>
      <h1>Wes Keiser</h1>
      <ViewSelect viewMemo={viewMemo} viewDispatch={viewDispatch} />
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
    letter-spacing: -0.06em;
    word-spacing: -0.06em;
    color: #60693a;
    font-size: 1.5em;
    font-family: Mukta-SemiBold;
    font-weight: 600;
  }

  @media only screen {
    @media (min-width: 1025px) {
      margin-right: ${({ theme }) => theme.widths.footer1025};
    }
  }
`;

export default Header;
