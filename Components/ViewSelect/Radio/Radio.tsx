import styled from "styled-components";

interface RadioProps {
  value: string;
  text: string;
  defaultChecked?: boolean;
}

const Radio = ({ text, ...props }: RadioProps) => {
  return (
    <Fieldset>
      <label htmlFor={text}>{text}</label>
      <input id={text} type="radio" name="views" {...props} />
      {console.log(props)}
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
    color: ${({ theme }) => theme.colors.titleColor1};
  }

  input {
    appearance: none;
    cursor: pointer;
  }
`;

export default Radio;
