import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";
import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

interface Views {
  refs: {
    skillsRef: RefObject<HTMLInputElement>;
    introRef: RefObject<HTMLInputElement>;
    projectsRef: RefObject<HTMLInputElement>;
  };
  viewMemo: string;
  viewDispatch: Dispatch<string>;
  setSimpleView: Dispatch<SetStateAction<string>>;
}

const Views = ({ refs, viewMemo, viewDispatch, setSimpleView }: Views) => {
  const onScroll = () => {
    const intro = refs.introRef.current;
    const skills = refs.skillsRef.current;
    const projects = refs.projectsRef.current;

    const introWithinBounds = intro?.getBoundingClientRect().top < 70;
    const skillsWithinBounds = skills?.getBoundingClientRect().top < 123.5;
    const projectsWithinBounds = projects?.getBoundingClientRect().top < 150;

    if (introWithinBounds && !skillsWithinBounds && !projectsWithinBounds) {
      viewDispatch({ type: "resetIntro" });
      setSimpleView("intro");
    }
    if (skillsWithinBounds && !projectsWithinBounds) {
      viewDispatch({ type: "resetSkills" });
      setSimpleView("skills");
    }
    if (projectsWithinBounds) {
      viewDispatch({ type: "resetProjects" });
      setSimpleView("projects");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Intro ref={refs.introRef} viewMemo={viewMemo} />
      <Skills ref={refs.skillsRef} viewMemo={viewMemo} />
      <Projects ref={refs.projectsRef} viewMemo={viewMemo} />
    </>
  );
};

export default Views;
