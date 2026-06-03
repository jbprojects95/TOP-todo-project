import { initTodoController } from "../modules/todoController";

export function createProject(container) {
  container.innerHTML = `
          <div class="wrapper">
  <h1>Create Project:</h1>
<form action="" method="get" class="todo-form" id="createProjectForm">


  <div class="form-row">
    <label for="createProjectName">Project Name:
    <input type="text" id="createProjectName" name="projectName" maxlength="140" /></label>
  </div>

  <div class="form-row">
    <button>Submit</button>
  </div>
</form></div>
  
  `;

  initTodoController();
}
