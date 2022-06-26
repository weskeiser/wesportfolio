import Skills from 'Components/Views/Skills';

const viewReducer = (view: JSX.Element, action: { type: string }) => {
  switch (action.type) {
    case 'skills':
      return <Skills />;
    case 'about':
      return <p>about</p>;
    case 'projects':
      return <p>projects</p>;
  }
};

export default viewReducer;
