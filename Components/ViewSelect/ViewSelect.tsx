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
      <Radio value="about" text="Introduksjon" defaultChecked={true} />
      <Radio value="skills" text="Ferdigheter" />
      <Radio value="projects" text="Prosjekter" />
    </Form>
  );
};

const Form = styled.form`
  grid-row: 1/4;
  grid-column: 5;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.page};
  width: 6em;
  margin-left: auto;
  /* grid-column: 8; */
`;

export default ViewSelect;
