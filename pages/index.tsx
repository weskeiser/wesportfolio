import type { NextPage } from "next";
import styled from "styled-components";
import {
  RefObject,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

import Header from "Components/Header";
import Views from "Components/Views";

import viewReducer from "./helpers/viewReducer";

const App: NextPage = () => {
  const skillsRef = useRef<HTMLInputElement>(null);
  const introRef = useRef<HTMLInputElement>(null);
  const projectsRef = useRef<HTMLInputElement>(null);
  const refs = {
    skillsRef,
    introRef,
    projectsRef,
  };

  const [view, viewDispatch] = useReducer<string>(viewReducer, "intro");
  const [simpleView, setSimpleView] = useState("intro");
  const viewMemo = useMemo(() => {
    return simpleView;
  }, [view, simpleView]);

  useEffect(() => {
    // Focus view when clicked in header

    const resolve = (type: string, ref: RefObject<HTMLInputElement>) => {
      viewDispatch({ type });
      ref.current?.scrollIntoView({
        behavior: "smooth",
      });
    };

    switch (view) {
      case "intro, clicked":
        resolve("resetIntro", introRef);
        break;
      case "skills, clicked":
        resolve("resetSkills", skillsRef);
        break;
      case "projects, clicked":
        resolve("resetProjects", projectsRef);
        break;
    }
  }, [view]);

  return (
    <>
      <Header viewMemo={viewMemo} viewDispatch={viewDispatch} />

      <Main>
        <Views
          viewMemo={viewMemo}
          viewDispatch={viewDispatch}
          refs={refs}
          setSimpleView={setSimpleView}
        />
      </Main>
    </>
  );
};

export default App;

const Main = styled.main`
  padding-top: 2em;
  margin-bottom: ${({ theme }) => theme.heights.footer};
`;
