import styled from 'styled-components';

const Radio = ({ id, ...props }) => {
  return (
    <Fieldset>
      <label htmlFor={id}>test</label>
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
    border: 1px solid green;
  }

  input {
    appearance: none;
    border: 1px solid red;
  }
`;

export default Radio;
