import ViewSelect from 'Components/ViewSelect';
import { Dispatch } from 'react';
import styled from 'styled-components';

interface Header {
  viewDispatch: Dispatch<string | object>;
}

const Header = ({ viewDispatch }: Header) => {
  return (
    <Wrapper>
      <h1>Wes Keiser</h1>

      <ViewSelect viewDispatch={viewDispatch} />
    </Wrapper>
  );
};

const Wrapper = styled.header``;

export default Header;
