import type { NextPage } from "next";
import styled, { ThemeProvider } from "styled-components";
import { useReducer, useRef } from "react";

import Header from "Components/Header";
import Footer from "Components/Footer";
import Views from "Components/Views";

import { theme } from "styles";

import viewReducer from "./helpers/viewReducer";

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

  return (
    <ThemeProvider theme={theme}>
      <Header view={view} viewDispatch={viewDispatch} />

      <Main>
        <Views refs={refs} view={view} />
      </Main>

      <Footer />
    </ThemeProvider>
  );
};

export default App;

const Main = styled.main`
  /* background-color: ${({ theme }) => theme.colors.page}; */
`;
