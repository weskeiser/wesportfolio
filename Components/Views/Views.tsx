import About from "Components/About";
import Projects from "Components/Projects";
import Skills from "Components/Skills";
import { RefObject } from "react";

interface Views {
  refs: {
    skillsRef: RefObject<HTMLInputElement>;
    aboutRef: RefObject<HTMLInputElement>;
    projectsRef: RefObject<HTMLInputElement>;
  };
  view: string;
}

const Views = ({ refs, view }: Views) => {
  return (
    <>
      <About ref={refs.aboutRef} view={view} />
      <Skills ref={refs.skillsRef} view={view} />
      <Projects ref={refs.projectsRef} view={view} />
    </>
  );
};

export default Views;
