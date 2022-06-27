import { Dispatch, FormEvent } from 'react';
import styled from 'styled-components';
import Radio from './Radio/Radio';

interface ViewSelectProps {
  viewDispatch: Dispatch<string | object>;
}

const ViewSelect = ({ viewDispatch }: ViewSelectProps) => {
  const switchView = (e: FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLFormElement;
    const type = target.value;

    viewDispatch({ type });
  };

  return (
    <Form onInput={(e) => switchView(e)}>
      <Radio
        value="skills"
        label="Ferdigheter"
        id="skills"
        defaultChecked={true}
      />
      <Radio value="about" label="Introduksjon" id="about" />
      <Radio value="projects" id="projects" label="Prosjekter" />
    </Form>
  );
};

const Form = styled.form`
  margin-bottom: 3em;
  display: flex;
`;

export default ViewSelect;
