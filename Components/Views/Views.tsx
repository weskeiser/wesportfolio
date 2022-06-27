import About from "Components/About";
import Projects from "Components/Projects";
import Skills from "Components/Skills";

const Views = ({ refs, view }) => {
  return (
    <>
      <About ref={refs.aboutRef} view={view} />
      <Skills ref={refs.skillsRef} view={view} />
      <Projects ref={refs.projectsRef} view={view} />
    </>
  );
};

export default Views;
