import "./styles/template-styles.css";

import { navigate } from "./router";
import { TodoItem } from "./modules/todo";
import { Project } from "./modules/project";

import { initUI } from "./modules/ui";
import { loadHome } from "./pages/home";

/* 
EXAMPLE IMG IMPORT:

import odinImage from "./odin.png";
   
const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);


*/

initUI();

// ----LOAD TODOS ON PAGE LOAD-----
const mainContent = document.getElementById("main-content");
loadHome(mainContent);
