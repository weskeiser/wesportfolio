import { Dispatch } from "react";
import styled from "styled-components";

interface ViewSelect {
  view: string;
  viewDispatch: Dispatch<string>;
}

const text = (view) => {
  switch (view) {
    case "intro":
      return "Introduksjon";
    case "skills":
      return "Ferdigheter";
    case "projects":
      return "Prosjekter";
  }
};

const decideOpacity = (view: string, direction: string) => {
  const filterAttribute = {
    filter: "opacity(50%)",
  };

  switch (view) {
    case "intro":
      if (direction === "left") {
        return filterAttribute;
      }
      break;
    case "skills":
      break;
    case "projects":
      if (direction === "right") {
        return filterAttribute;
      }
      break;
  }
};

const decideOpacityRight = (view: string) => {
  switch (view) {
    case "intro":
      break;
    case "skills":
      break;
    case "projects":
      return {
        filter: "opacity(50%)",
      };
  }
};

const ViewSelect = ({ view, viewDispatch }: ViewSelect) => {
  return (
    <Wrapper view={view}>
      <button onClick={() => viewDispatch({ type: "previous" })}>
        <img
          src="/images/arrow.svg"
          alt="navigation arrow left"
          style={decideOpacity(view, "left")}
        />
      </button>
      <p>{text(view)}</p>
      <button onClick={() => viewDispatch({ type: "next" })}>
        <img
          src="/images/arrow.svg"
          alt="navigation arrow right"
          style={decideOpacity(view, "right")}
        />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-left: auto;

  & > button {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.page};
    border: none;
    /* border: 1px solid black; */

    img {
      width: 0.6em;
    }

    :nth-of-type(1) {
      padding-left: 1.5em;
      padding-right: 1.5em;

      img {
        transform: rotate(180deg);
      }
    }

    :nth-of-type(2) {
      padding-right: 1.5em;
      padding-left: 1.5em;
    }
  }

  & > p {
    text-align: center;
    font-size: 1.2em;
    margin: auto 0;
    width: 5.5em;
    color: ${({ theme }) => theme.colors.titleColor1};
  }
`;

export default ViewSelect;
