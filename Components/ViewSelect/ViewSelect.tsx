import { Dispatch } from 'react';
import styled from 'styled-components';
import Radio from './Radio/Radio';

interface viewsRadioProps {
  viewDispatch: Dispatch<string | object>;
}

const ViewsRadio = ({ viewDispatch }: viewsRadioProps) => {
  const switchView = (e) => {
    const type = e.target.value;

    viewDispatch({ type });
  };

  return (
    <Form onInput={(e) => switchView(e)}>
      <Radio value="skills" id="skills" defaultChecked={true} />
      <Radio value="about" id="about" />
      <Radio value="projects" id="projects" />
    </Form>
  );
};

const Form = styled.form`
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

export default ViewsRadio;
