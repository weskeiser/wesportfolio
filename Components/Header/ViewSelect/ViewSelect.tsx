import { Dispatch } from "react";
import styled from "styled-components";

interface ViewSelect {
  view: string;
  viewDispatch: Dispatch<string>;
}

const ViewSelect = ({ view, viewDispatch }: ViewSelect) => {
  return (
    <fieldset>
      <input
        type="button"
        onClick={() => viewDispatch({ type: "previous" })}
        value="&#9650;"
      />
      <label>{view}</label>
      <input
        type="button"
        onClick={() => viewDispatch({ type: "next" })}
        value="&#9650;"
      />
    </fieldset>
  );
};

export default ViewSelect;
