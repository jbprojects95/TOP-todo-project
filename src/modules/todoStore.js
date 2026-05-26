import Project from "./project.js";

const workProject = new Project("Work", "work");
const homeProject = new Project("Home", "home");
const miscProject = new Project("Misc", "misc");

let allProjects = [workProject, homeProject, miscProject];
let currentProject = workProject;

export function setCurrentProject(project) {
  currentProject = project;
}

export function getCurrentProject() {
  return currentProject;
}

export { workProject, homeProject, miscProject, allProjects };
