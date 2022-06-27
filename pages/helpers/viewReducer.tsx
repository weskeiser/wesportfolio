interface action {
  action: "skills" | "about" | "projects" | undefined;
  type: string;
}

const viewReducer = (view: string, action: action): string | undefined => {
  switch (action.type) {
    case "skills":
      return "skills";
    case "about":
      return "about";
    case "projects":
      return "projects";
  }
};

export default viewReducer;
