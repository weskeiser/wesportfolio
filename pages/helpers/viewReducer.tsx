interface action {
  action: "previous" | "next" | undefined;
  type: string;
}

const viewReducer = (view: string, action: action): string | undefined => {
  if (action.type === "previous") {
    switch (view) {
      case "about":
        return view;
      case "skills":
        return "about";
      case "projects":
        return "skills";
    }
  }

  if (action.type === "next") {
    switch (view) {
      case "about":
        return "skills";
      case "skills":
        return "projects";
      case "projects":
        return view;
    }
  }
};

export default viewReducer;
