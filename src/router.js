import { loadHome } from "./pages/home";
import { loadProjects } from "./pages/projects";
import { loadTodo } from "./pages/todoPage";

const routes = {
  home: {
    title: "Home",
    render: loadHome,
  },
  projects: {
    title: "Projects",
    render: loadProjects,
  },
  todo: {
    title: "Todo-page",
    render: loadTodo,
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
