import Intro from "Components/Intro";
import Projects from "Components/Projects";
import Skills from "Components/Skills";
import { RefObject } from "react";

interface Views {
  refs: {
    skillsRef: RefObject<HTMLInputElement>;
    introRef: RefObject<HTMLInputElement>;
    projectsRef: RefObject<HTMLInputElement>;
  };
  view: string;
}

const Views = ({ refs, view }: Views) => {
  return (
    <>
      <Intro ref={refs.introRef} view={view} />
      <Skills ref={refs.skillsRef} view={view} />
      <Projects ref={refs.projectsRef} view={view} />
    </>
  );
};

export default Views;
