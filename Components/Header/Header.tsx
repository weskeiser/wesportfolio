import ViewsRadio from 'Components/ViewSelect';
import { Dispatch } from 'react';
import styled from 'styled-components';

interface Header {
  viewDispatch: Dispatch<string | object>;
}

const Header = ({ viewDispatch }: Header) => {
  return (
    <Wrapper>
      <Title>
        <h1>Wes Keiser</h1>
        <h2>Front-end utvikler</h2>
      </Title>

      <ViewsRadio viewDispatch={viewDispatch} />
    </Wrapper>
  );
};

const Title = styled.div``;

const Wrapper = styled.header`
  display: flex;
`;

export default Header;
