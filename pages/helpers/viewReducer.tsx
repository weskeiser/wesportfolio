export interface ViewAction {
  action: string;
  type: string;
}

const viewReducer = (view: string, action: ViewAction): string | undefined => {
  if (action.type === "previous") {
    switch (view) {
      case "intro":
        return view;
      case "skills":
        return "intro, clicked";
      case "projects":
        return "skills, clicked";
    }
  }

  if (action.type === "next") {
    switch (view) {
      case "intro":
        return "skills, clicked";
      case "skills":
        return "projects, clicked";
      case "projects":
        return view;
    }
  }

  switch (action.type) {
    case "resetIntro":
      return "intro";
    case "resetSkills":
      return "skills";
    case "resetProjects":
      return "projects";
  }
};

export default viewReducer;
