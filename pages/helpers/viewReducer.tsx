interface action {
  action: "previous" | "next" | undefined;
  type: string;
}

const viewReducer = (view: string, action: action): string | undefined => {
  if (action.type === "previous") {
    switch (view) {
      case "intro":
        return view;
      case "skills":
        return "intro";
      case "projects":
        return "skills";
    }
  }

  if (action.type === "next") {
    switch (view) {
      case "intro":
        return "skills";
      case "skills":
        return "projects";
      case "projects":
        return view;
    }
  }

  if (action.type === "highlightIntro") {
    return "intro";
  }
  if (action.type === "highlightSkills") {
    return "skills";
  }
  if (action.type === "highlightProjects") {
    return "projects";
  }
};

export default viewReducer;
