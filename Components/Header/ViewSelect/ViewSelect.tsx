// interface ViewSelect {
//   viewDispatch:
// }

const ViewSelect = ({ viewDispatch }) => {
  return (
    <form>
      <input type="button" onClick={() => viewDispatch({ type: "previous" })} />
      <p>Intro</p>
      <input type="button" onClick={() => viewDispatch({ type: "next" })} />
    </form>
  );
};

export default ViewSelect;
