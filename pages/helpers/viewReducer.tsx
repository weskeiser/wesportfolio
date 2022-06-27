import About from 'Components/About';
import Projects from 'Components/Projects';
import Skills from 'Components/Skills';

const viewReducer = (view: JSX.Element, action: { type: string }) => {
  switch (action.type) {
    case 'skills':
      return <Skills />;
    case 'about':
      return <About />;
    case 'projects':
      return <Projects />;
  }
};

export default viewReducer;
