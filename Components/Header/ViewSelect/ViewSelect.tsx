import { Dispatch } from "react";
import styled from "styled-components";
import SelectButton from "../SelectButton";

interface ViewSelect {
  viewMemo: string;
  viewDispatch: Dispatch<{ type: string }>;
}

const text = (viewMemo: ViewSelect["viewMemo"]) => {
  switch (viewMemo) {
    case "intro":
      return "Introduksjon";
    case "skills":
      return "Ferdigheter";
    case "projects":
      return "Prosjekter";
  }
};

const ViewSelect = ({ viewMemo, viewDispatch }: ViewSelect) => {
  return (
    <Wrapper>
      <SelectButton
        viewMemo={viewMemo}
        viewDispatch={viewDispatch}
        direction="previous"
      />
      <p>{text(viewMemo)}</p>
      <SelectButton
        viewMemo={viewMemo}
        viewDispatch={viewDispatch}
        direction="next"
      />
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
    margin-bottom: 1px;

    :disabled {
      cursor: initial;
    }

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
    font-family: Mukta-SemiBold;
    text-align: center;
    font-size: 1.2em;
    margin: auto 0;
    width: 5.5em;
    color: ${({ theme }) => theme.colors.titleColor1};
  }

  @media only screen {
    @media (min-width: 1025px) {
      margin: 0 auto;
    }
  }
`;

export default ViewSelect;
