import Intro from "./Intro";
import Projects from "./Projects";
import Skills from "./Skills";
import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

interface Views {
  refs: {
    skillsRef: RefObject<HTMLElement>;
    introRef: RefObject<HTMLElement>;
    projectsRef: RefObject<HTMLElement>;
  };
  viewDispatch: Dispatch<{ type: string }>;
  viewMemo: string;
  setSimpleView: Dispatch<SetStateAction<string>>;
}

const Views = ({ refs, viewDispatch, viewMemo, setSimpleView }: Views) => {
  const onScroll = () => {
    const intro = refs.introRef.current;
    const skills = refs.skillsRef.current;
    const projects = refs.projectsRef.current;

    const introWithinBounds =
      (intro?.getBoundingClientRect().top as number) < 70;
    const skillsWithinBounds =
      (skills?.getBoundingClientRect().top as number) < 183.5;
    const projectsWithinBounds =
      (projects?.getBoundingClientRect().top as number) < 170;

    console.log(skills?.getBoundingClientRect().height);

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
