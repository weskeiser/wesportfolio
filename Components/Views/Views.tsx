import Intro from "Components/Intro";
import Projects from "Components/Projects";
import Skills from "Components/Skills";
import { RefObject, useEffect, useId, useRef, useState } from "react";

interface Views {
  refs: {
    skillsRef: RefObject<HTMLInputElement>;
    introRef: RefObject<HTMLInputElement>;
    projectsRef: RefObject<HTMLInputElement>;
  };
  view: string;
}

const Views = ({ refs, view, viewDispatch }: Views) => {
  const [intervalPending, setIntervalPending] = useState();

  const onScroll = () => {
    const intro = refs.introRef.current;
    const skills = refs.skillsRef.current;
    const projects = refs.projectsRef.current;
    const introWithinBounds = intro?.getBoundingClientRect().top < 70;
    const skillsWithinBounds = skills?.getBoundingClientRect().top < 123.5;
    const projectsWithinBounds = projects?.getBoundingClientRect().top < 150;

    if (introWithinBounds && !skillsWithinBounds && !projectsWithinBounds)
      viewDispatch({ type: "highlightIntro" });
    if (skillsWithinBounds && !projectsWithinBounds)
      viewDispatch({ type: "highlightSkills" });
    if (projectsWithinBounds) viewDispatch({ type: "highlightProjects" });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Intro ref={refs.introRef} view={view} />
      <Skills ref={refs.skillsRef} view={view} />
      <Projects ref={refs.projectsRef} view={view} />
    </>
  );
};

export default Views;
