import TodoItem from "./todo.js";
import {
  allProjects,
  getCurrentProject,
  setCurrentProject,
} from "./todoStore.js";
import { populateProjectDropDown, generateTodoCards } from "./todoRender.js";

export function initTodoController() {
  const todoForm = document.getElementById("todoForm");
  const todoContainer = document.getElementById("todoContainer");
  if (!todoForm || !todoContainer) return;
  populateProjectDropDown(allProjects);

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;

    // Below needs to match the name of the form fields
    const selectedProject = form.project.value;
    const dueDate = form.dueDate.value;
    const todoText = form.todoItem.value;
    const checkbox = form.priority.checked;
    const id = crypto.randomUUID();

    // if (!todoText || !dueDate) return
    const newTodo = new TodoItem(id, todoText, dueDate, checkbox);

    let chosenProject = allProjects.find(
      (project) => project.id === selectedProject,
    );
    chosenProject.addTodo(newTodo);
    setCurrentProject(chosenProject);

    todoContainer.innerHTML = generateTodoCards(chosenProject.todos);

    form.reset();
  });

  // DELETE BUTTON:

  todoContainer.addEventListener("click", (e) => {
    const currentProject = getCurrentProject();
    let button = e.target.closest("button");
    if (!button) return;
    if (button.dataset.button === "delete") {
      const todoCard = button.closest(".todo-card");
      currentProject.deleteTodo(todoCard.dataset.id);
      todoContainer.innerHTML = generateTodoCards(currentProject.todos);
    }
  });
}
