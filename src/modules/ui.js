import { navigate } from "../router";
import { allProjects, setCurrentProject } from "./todoStore.js";
import { generateProjectList, generateTodoCards } from "./todoRender.js";
import { loadHome } from "../pages/home.js";

export function initUI() {
  const dropDowns = document.querySelectorAll(".dropdown-btn");
  const toggleButton = document.querySelector(".toggle-btn");
  const sidebar = document.querySelector(".sidebar");
  const colourHex = document.querySelector("#base-colour-input");

  if (!sidebar || !toggleButton) return;

  function toggleSidebar() {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
    closeAllSubMenus();
  }

  toggleButton.addEventListener("click", toggleSidebar);

  dropDowns.forEach((button) => {
    button.addEventListener("click", function () {
      if (!button.nextElementSibling.classList.contains("show")) {
        closeAllSubMenus();
      }
      // As subMenu is the next parent of this (button) it adds show to it
      const subMenu = this.nextElementSibling;
      subMenu.classList.toggle("show");
      button.classList.toggle("rotate");

      // Toggles the sidebar open if a drop down is clicked when sidebar is closed.
      if (sidebar.classList.contains("close")) {
        sidebar.classList.toggle("close");
        toggleButton.classList.toggle("rotate");
      }
    });
  });

  function closeAllSubMenus() {
    // Removes relevant classes when sidebar is open (closes drop downs if sidebar is closed)
    Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
      ul.classList.remove("show");
      ul.previousElementSibling.classList.remove("rotate");
    });
  }

  function setActive(navbarItem) {
    document
      .querySelectorAll("[data-route], [data-project-id]")
      .forEach((item) => item.classList.remove("active"));

    navbarItem.classList.add("active");
  }

  document.addEventListener("click", (e) => {
    const logoLink = document.getElementById("logo-link");
    const link = e.target.closest("[data-route]");
    if (!link) return;

    e.preventDefault();
    if (link != logoLink) {
      navigate(link.dataset.route);
    }
    if (link === logoLink) {
      return;
    } else {
      setActive(link);
    }
  });

  // -----------------------------------------------------------

  // *SIDEBAR PROJECT DROPDOWN FN*

  const projectMenu = document.getElementById("allProjectSubMenu");

  if (projectMenu) {
    projectMenu.innerHTML = generateProjectList(allProjects);
  }

  document.addEventListener("click", (e) => {
    const projectLink = e.target.closest("[data-project-id]");
    if (!projectLink) return;

    const projectId = projectLink.dataset.projectId;
    const project = allProjects.find((project) => project.id === projectId);

    if (!project) return;

    setCurrentProject(project);
    setActive(projectLink);
    navigate("projects");
  });

  // ---------------------------------
  // *WINDOW RESIZE FN
  // ---------------------------------

  function handleResize() {
    if (window.innerWidth <= 800) {
      sidebar.classList.remove("close");
      toggleButton.classList.remove("rotate");
      closeAllSubMenus();
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  // ----------[COLOUR THEME CODE]----------

  function setColour() {
    const lightness = getLightnessFromHex(colourHex.value);
    document.body.setAttribute(
      "style",
      `--base-clr: ${colourHex.value};
    --text-clr: ${lightness > 65 ? "black" : "white"}`,
    );
  }

  if (colourHex) {
    colourHex.addEventListener("input", setColour);
  }

  function getLightnessFromHex(hex) {
    hex = hex.replace(/^#/, "");

    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    const brightness = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

    return +(brightness * 100).toFixed(2);
  }
}
