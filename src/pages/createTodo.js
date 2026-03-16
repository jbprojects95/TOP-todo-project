import "../styles/createTodo-styles.css";

export function loadTodo(container) {
  container.innerHTML = `
      <div class="wrapper">
      <div class="container">
          <form action="" method="get" class="todo-form">
  <div class="form-row">
    <label for="project">Project:</label>
    <select name="project" id="selectProject">
      <option value="work">Work</option>
      <option value="home">Home</option>
      <option value="misc">Misc</option>
    </select>
  </div>

  <div class="form-row">
    <label for="todo-item">Todo:</label>
    <input type="text" id="todoItemText" name="todo-item" />
  </div>

        <div class="form-row">
        <button>Submit</button>
      </div>
</form>

        </div>
  </div>
  
  `;
}
