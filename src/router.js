import { loadHome } from "./pages/home";
import { loadProjects } from "./pages/projects";
import { loadTodo } from "./pages/todopage";

const routes = {
  home: {
    title: "Home",
    render: loadHome,
  },
  projects: {
    title: "projects",
    render: loadProjects,
  },
  todo: {
    title: "Todo Page",
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
