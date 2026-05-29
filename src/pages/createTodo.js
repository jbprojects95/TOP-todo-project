import "../styles/createTodo-styles.css";
import { initTodoController } from "../modules/todoController.js";
import { getCurrentProject } from "../modules/todoStore.js";
import { generateTodoCards, renderTodoList } from "../modules/todoRender.js";

export function loadTodo(container) {
  const currentProject = getCurrentProject();
  container.innerHTML = `
      <div class="wrapper">
  <h1>Create Todo:</h1>
<form action="" method="get" class="todo-form" id="todoForm">


  <div class="form-row">
    <label for="project">Project:
    <select name="project" id="selectProject">

    </select></label>
  </div>

  <div class="form-row">
    <label for="dueDate">Due Date:
    <input type="date" id="dueDate" name="dueDate" ></label>
  </div>

  <div class="form-row">
    <label for="priority">Priority:
      <input type="checkbox" name="priority" id="priority">
    </label>
  </div>

  <div class="form-row">
    <label for="todoItem">Todo:
    <input type="text" id="todoItemText" name="todoItem" maxlength="140" /></label>
  </div>

  <div class="form-row">
    <button>Submit</button>
  </div>
</form></div>


<div class="wrapper">
      <h1>Todos:</h1>
      <ul class="todo-list" id="todoContainer">
        ${renderTodoList(currentProject.todos)}
      </ul>
    </div>
`;

  initTodoController();
}
