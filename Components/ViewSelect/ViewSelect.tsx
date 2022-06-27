import { Dispatch, FormEvent, RefObject } from "react";
import styled from "styled-components";
import Radio from "./Radio/Radio";

interface ViewSelectProps {
  refsAndDispatch: {
    skillsRef: RefObject<HTMLInputElement>;
    aboutRef: RefObject<HTMLInputElement>;
    projectsRef: RefObject<HTMLInputElement>;
    viewDispatch: Dispatch<string>;
  };
}

const ViewSelect = ({ refsAndDispatch }: ViewSelectProps) => {
  const switchView = (e: FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLFormElement;
    const type = target.value as string;
    const { viewDispatch } = refsAndDispatch;
    viewDispatch({ type });

    console.log(refsAndDispatch);

    switch (type) {
      case "skills":
        return refsAndDispatch.skillsRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      case "about":
        return refsAndDispatch.aboutRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      case "projects":
        return refsAndDispatch.projectsRef.current?.scrollIntoView({
          behavior: "smooth",
        });
    }
  };

  return (
    <Form onInput={(e) => switchView(e)}>
      <Radio
        value="about"
        label="Introduksjon"
        id="about"
        defaultChecked={true}
      />
      <Radio value="skills" label="Ferdigheter" id="skills" />
      <Radio value="projects" id="projects" label="Prosjekter" />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
`;

export default ViewSelect;
