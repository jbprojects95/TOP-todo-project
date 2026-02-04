import { loadHome } from "./pages/home";
import { loadCalendar } from "./pages/calendar";
import { loadDashboard } from "./pages/dashboard";
import { loadProfile } from "./pages/profile";

const routes = {
  home: {
    title: "Home",
    render: loadHome,
  },
  dashboard: {
    title: "Dashboard",
    render: loadDashboard,
  },
  calendar: {
    title: "Calendar",
    render: loadCalendar,
  },
  profile: {
    title: "Profile",
    render: loadProfile,
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
