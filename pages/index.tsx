import type { NextPage } from "next";
import styled, { ThemeProvider } from "styled-components";
import { useEffect, useMemo, useReducer, useRef, useState } from "react";

import Header from "Components/Header";
import Footer from "Components/Footer";
import Views from "Components/Views";

import { theme } from "styles";

import viewReducer from "./helpers/viewReducer";

const App: NextPage = () => {
  const skillsRef = useRef<HTMLInputElement>(null);
  const introRef = useRef<HTMLInputElement>(null);
  const projectsRef = useRef<HTMLInputElement>(null);

  const [view, viewDispatch] = useReducer<string>(viewReducer, "intro");

  const getView = useMemo(() => {
    return view;
  }, [view]);

  const [firstRenderDone, setFirstRenderDone] = useState(false);
  useEffect(() => {
    // Avoid scrolling on page entry
    if (!firstRenderDone) {
      console.log("ho");
      setFirstRenderDone(true);
      return;
    }

    // Focus view when clicked in header
    switch (getView) {
      case "intro":
        return introRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      case "skills":
        return skillsRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      case "projects":
        return projectsRef.current?.scrollIntoView({
          behavior: "smooth",
        });
    }
  }, [getView]);

  const refs = {
    skillsRef,
    introRef,
    projectsRef,
  };

  return (
    <ThemeProvider theme={theme}>
      <Header view={getView} viewDispatch={viewDispatch} />

      <Main>
        <Views view={getView} refs={refs} />
      </Main>

      <Footer />
    </ThemeProvider>
  );
};

export default App;

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.page};
  padding-top: 2em;
`;
