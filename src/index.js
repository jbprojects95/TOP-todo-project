import "./styles/template-styles.css";

import { navigate } from "./router";

/* 
EXAMPLE IMG IMPORT:

import odinImage from "./odin.png";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);


*/

const dropDowns = document.querySelectorAll(".dropdown-btn");
const toggleButton = document.querySelector(".toggle-btn");
const sidebar = document.querySelector(".sidebar");

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
    .querySelectorAll("[data-route]")
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

// ----------[COLOUR THEME CODE]----------

const colourHex = document.querySelector("#base-colour-input");
function setColour() {
  const lightness = getLightnessFromHex(colourHex.value);
  document.body.setAttribute(
    "style",
    `--base-clr: ${colourHex.value};
    --text-clr: ${lightness > 65 ? "black" : "white"}`
  );
}

colourHex.addEventListener("input", setColour);

function getLightnessFromHex(hex) {
  hex = hex.replace(/^#/, "");

  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  const brightness = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

  return +(brightness * 100).toFixed(2);
}
