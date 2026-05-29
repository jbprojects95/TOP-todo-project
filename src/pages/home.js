import { renderTodoList } from "../modules/todoRender";
import { allProjects, getCurrentProject } from "../modules/todoStore";

export function loadHome(container) {
  const currentProject = getCurrentProject();
  const allTodos = allProjects.flatMap((project) => project.todos);
  container.innerHTML = `
<div class="wrapper">
            <h1 id="projectTodoTitle">All todos</h1>
                  <ul class="todo-list" id="todoContainer">
                         ${renderTodoList(allTodos)}
                  </ul>
            </div>
`;
}
