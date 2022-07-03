import { Dispatch, MouseEvent, useEffect, useState } from "react";

const disabledOpacity = (viewMemo: string, direction: string) => {
  const filterAttribute = {
    filter: "opacity(50%)",
  };

  switch (viewMemo) {
    case "intro":
      if (direction === "previous") {
        return filterAttribute;
      }
      break;
    case "skills":
      break;
    case "projects":
      if (direction === "next") {
        return filterAttribute;
      }
      break;
  }
};

interface SelectButton {
  direction: string;
  viewMemo: string;
  viewDispatch: Dispatch<{ type: string }>;
}

interface Disabled {
  previous: boolean;
  next: boolean;
  [key: string]: boolean;
}

const SelectButton = ({ direction, viewMemo, viewDispatch }: SelectButton) => {
  const [disabled, setDisabled] = useState<Disabled>({
    previous: true,
    next: false,
  });

  useEffect(() => {
    switch (viewMemo) {
      case "intro":
        setDisabled({ previous: true, next: false });
        break;
      case "skills":
        setDisabled({ previous: false, next: false });
        break;
      case "projects":
        setDisabled({ previous: false, next: true });
        break;
    }
  }, [viewMemo]);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const type = e.currentTarget.value;
    viewDispatch({ type });
  };
  return (
    <button
      onClick={(e) => handleClick(e)}
      value={direction}
      disabled={disabled[direction]}
    >
      <img
        src="/images/arrow.svg"
        alt={`navigation arrow ${direction}`}
        style={disabledOpacity(viewMemo, direction)}
      />
    </button>
  );
};

export default SelectButton;
