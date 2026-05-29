export function createProject(container) {
  container.innerHTML = `
          <div class="wrapper">
  <h1>Create Todo:</h1>
<form action="" method="get" class="todo-form" id="todoForm">


  <div class="form-row">
    <label for="projectName">Project Name:
    <input type="text" id="projectName" name="projectName" maxlength="140" /></label>
  </div>

  <div class="form-row">
    <button>Submit</button>
  </div>
</form></div>
  
  `;
}
