import { getCurrentProject } from "../modules/todoStore.js";
import { generateTodoCards, renderTodoList } from "../modules/todoRender.js";
import { initTodoController } from "../modules/todoController.js";

export function loadProject(container) {
  const currentProject = getCurrentProject();
  console.log(currentProject);

  container.innerHTML = `
<div class="wrapper">
      <h1>${currentProject.title} Todos:</h1>
      <ul class="todo-list" id="todoContainer">
        ${renderTodoList(currentProject.todos)}
      </ul>
    </div>
`;

  initTodoController();
}
