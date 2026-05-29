import { loadHome } from "./pages/home";
import { createProject } from "./pages/createProject";
import { loadTodo } from "./pages/createTodo";
import { loadProject } from "./pages/projects";

const routes = {
  home: {
    title: "Home",
    render: loadHome,
  },
  createProject: {
    title: "Create Project",
    render: createProject,
  },
  createTodo: {
    title: "Create Todo",
    render: loadTodo,
  },
  projects: {
    title: "Projects",
    render: loadProject,
  },
};

export function navigate(route) {
  const container = document.getElementById("main-content");
  const pageTitle = document.getElementById("page-title");
  const page = routes[route];

  if (!page) return;
  else {
    container.className = "";
    container.classList.add(`page-${route}`);
    container.innerHTML = "";
    page.render(container);
    pageTitle.textContent = page.title;
  }
}
