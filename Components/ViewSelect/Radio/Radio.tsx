import styled from "styled-components";

interface RadioProps {
  id: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
}

const Radio = ({ id, label, ...props }: RadioProps) => {
  return (
    <Fieldset>
      <label htmlFor={id}>{label}</label>
      <input type="radio" name="views" {...props} />
    </Fieldset>
  );
};

const Fieldset = styled.fieldset`
  border: none;
  display: grid;
  width: 10em;
  height: 2em;

  label,
  input {
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    height: 100%;
  }

  label {
  }

  input {
    appearance: none;
  }
`;

export default Radio;