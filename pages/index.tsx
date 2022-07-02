import type { NextPage } from "next";
import styled from "styled-components";
import {
  RefObject,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  Reducer,
  Dispatch,
} from "react";

import Header from "Components/Header";
import Views from "Components/Views";

import viewReducer, { ViewAction } from "./helpers/viewReducer";

const App: NextPage = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const refs = {
    skillsRef,
    introRef,
    projectsRef,
  };

  const [view, viewDispatch]: [string, Dispatch<{ type: string }>] = useReducer<
    Reducer<string, ViewAction>
  >(
    // @ts-ignore
    viewReducer,
    "intro"
  );
  const [simpleView, setSimpleView] = useState("intro");
  const viewMemo = useMemo(() => {
    return simpleView;
  }, [view, simpleView]);

  useEffect(() => {
    // Focus view when clicked in header

    const resolve = (type: string, ref: RefObject<HTMLElement>) => {
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
