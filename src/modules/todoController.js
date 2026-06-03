import TodoItem from "./todo.js";
import {
  allProjects,
  getCurrentProject,
  setCurrentProject,
} from "./todoStore.js";
import {
  populateProjectDropDown,
  generateTodoCards,
  generateProjectList,
} from "./todoRender.js";
import Project from "./project.js";

export function initTodoController() {
  const todoForm = document.getElementById("todoForm");
  const todoContainer = document.getElementById("todoContainer");
  const mainContent = document.getElementById("main-content");
  const editTodoForm = document.getElementById("editTodoForm");
  const createProjectForm = document.getElementById("createProjectForm");

  if (todoForm && todoContainer) {
    todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;

      // Below needs to match the name of the form fields
      const selectedProject = form.project.value;
      const dueDate = form.dueDate.value;
      const todoText = form.todoItem.value;
      const checkbox = form.priority.checked;
      const id = crypto.randomUUID();

      const newTodo = new TodoItem(id, todoText, dueDate, checkbox);

      let chosenProject = allProjects.find(
        (project) => project.id === selectedProject,
      );
      chosenProject.addTodo(newTodo);
      setCurrentProject(chosenProject);

      todoContainer.innerHTML = generateTodoCards(chosenProject.todos);

      form.reset();
      form.project.value = selectedProject;
    });

    populateProjectDropDown(allProjects, "selectProject");
  }

  if (editTodoForm) {
    editTodoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const editForm = e.target;
      const todoId = editTodoForm.dataset.todoId;
      const newText = editForm.editTodoText.value;
      const newDueDate = editForm.editDueDate.value;
      const newPriority = editForm.editPriority.checked;

      const currentProject = getCurrentProject();
      currentProject.editTodo(todoId, newText, newDueDate, newPriority);

      const todoContainer = document.getElementById("todoContainer");
      if (todoContainer) {
        todoContainer.innerHTML = generateTodoCards(currentProject.todos);
      }

      document.getElementById("editTodoPopover").hidePopover();
    });
  }

  if (createProjectForm) {
    createProjectForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;
      const projectName = form.projectName.value.trim();

      if (!projectName) return;

      const projectId = crypto.randomUUID();

      const newProject = new Project(projectName, projectId);

      allProjects.push(newProject);
      setCurrentProject(newProject);

      const projectMenu = document.getElementById("allProjectSubMenu");

      if (projectMenu) {
        projectMenu.innerHTML = generateProjectList(allProjects);
      }

      form.reset();
    });
  }

  if (mainContent) {
    // TCARD BUTTONS:
    mainContent.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (!button) return;

      const todoCard = button.closest(".todo-card");
      if (!todoCard) return;

      const currentProject = getCurrentProject();
      const todoContainer = document.getElementById("todoContainer");
      if (!todoContainer) return;

      const todoId = todoCard.dataset.id;

      if (button.dataset.button === "delete") {
        currentProject.deleteTodo(todoId);
        todoContainer.innerHTML = generateTodoCards(currentProject.todos);
      }
      if (button.dataset.button === "complete") {
        currentProject.toggleTodo(todoId);
        todoContainer.innerHTML = generateTodoCards(currentProject.todos);
      }
      if (button.dataset.button === "edit") {
        const selectedTodo = currentProject.todos.find(
          (todo) => todo.id === todoId,
        );

        if (!selectedTodo) return;

        editTodoForm.dataset.todoId = todoId;
        const editTodoText = document.getElementById("editTodoText");
        const editDueDate = document.getElementById("editDueDate");
        const editPriority = document.getElementById("editPriority");

        editTodoText.value = selectedTodo.text;
        editDueDate.value = selectedTodo.dueDate;
        editPriority.checked = selectedTodo.priority;

        const popover = document.getElementById("editTodoPopover");
        popover.showPopover();
        return;
      }
    });
  }
}
