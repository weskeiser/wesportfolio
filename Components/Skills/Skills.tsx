import styled from 'styled-components';

const Skills = () => {
  return (
    <Wrapper>
      <h2>Relevante ferdigheter</h2>
      <ul>
        <br />
        <li>HTML</li>
        <li>CSS/SCSS</li>
        <li>Styled Components</li>

        <br />
        <li>JavaScript/TypeScript</li>
        <li>React.js</li>

        <br />
        <li>Git</li>
        <li>VIM</li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid black;

  h2 {
    color: green;
  }

  ul {
    list-style: none;
  }
`;

export default Skills;
