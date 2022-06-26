import type { NextPage } from 'next';
import styled from 'styled-components';
import { useReducer } from 'react';

import Skills from 'Components/Views/Skills';
import Contact from 'Components/Contact';
import Photo from 'Components/Photo';
import Header from 'Components/Header';
import viewReducer from './helpers/viewReducer';

const App: NextPage = () => {
  const [view, viewDispatch] = useReducer(viewReducer, <Skills />);

  return (
    <>
      <Header viewDispatch={viewDispatch} />
      <Main>
        {view}
        <Photo />
        <Contact />
      </Main>
    </>
  );
};

export default App;

const Main = styled.main`
  /* margin: 0 3em; */
  /* margin-top: 3em; */
`;
