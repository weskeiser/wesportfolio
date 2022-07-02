import { Reducer } from "react";

enum ActionMethod {
  previous = "PREVIOUS",
  next = "NEXT",
  resetIntro = "RESETINTRO",
  resetSkills = "RESETSKILLS",
  resetProjects = "RESETPROJECTS",
}

export interface ViewAction extends Reducer<{ type: string }, ActionMethod> {
  action: ActionMethod;
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
