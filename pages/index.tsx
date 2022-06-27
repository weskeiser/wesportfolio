import type { NextPage } from "next";
import styled, { ThemeProvider } from "styled-components";
import { useReducer, useRef } from "react";

import Header from "Components/Header";
import Footer from "Components/Footer";
import viewReducer from "./helpers/viewReducer";

import { theme } from "styles";
import Views from "Components/Views";

const App: NextPage = () => {
  const skillsRef = useRef<HTMLInputElement>(null);
  const aboutRef = useRef<HTMLInputElement>(null);
  const projectsRef = useRef<HTMLInputElement>(null);

  const [view, viewDispatch] = useReducer<string>(viewReducer, "about");

  const refs = {
    skillsRef,
    aboutRef,
    projectsRef,
  };

  const refsAndDispatch = Object.assign(refs, { viewDispatch });

  return (
    <ThemeProvider theme={theme}>
      <Header refsAndDispatch={refsAndDispatch} />
      <Views refs={refs} view={view} />
      <Main></Main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

const Main = styled.main``;
