import type { NextPage } from 'next';
import styled from 'styled-components';
import { useReducer } from 'react';

import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Skills from 'Components/Skills';
import viewReducer from './helpers/viewReducer';

const App: NextPage = () => {
  const [view, viewDispatch] = useReducer(viewReducer, <Skills />);

  return (
    <>
      <Header viewDispatch={viewDispatch} />

      <Main>{view}</Main>

      <Footer />
    </>
  );
};

export default App;

const Main = styled.main``;

// Helvetica
// Apple SD Gothic Neo
