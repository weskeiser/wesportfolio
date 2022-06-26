import type { NextPage } from 'next';
import styled from 'styled-components';

import Title from 'Components/Title';
import Skills from 'Components/Skills';

const Home: NextPage = () => {
  return (
    <Main>
      <Title />
      <Skills />
      <p>Photo</p>
      <p>Contact</p>
    </Main>
  );
};

export default Home;

const Main = styled.main``;
