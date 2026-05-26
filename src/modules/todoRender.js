export function populateProjectDropDown(options) {
  const projectList = document.getElementById("selectProject");
  // This creates an option element, using the title as what is displayed and id as the value
  options.forEach((option) => {
    projectList.add(new Option(option.title, option.id));
  });
}

export function generateTodoCards(projectArray) {
  let todoCards = projectArray.map((todo, index) => {
    let displayNumber = String(index + 1).padStart(4, "0");
    return `<li class="todo-list-item">
        <div class="todo-card" data-id="${todo.id}">
            <div class="todo-info">
                <h4>[<span>${todo.dueDate}</span>]</h4>
                <h4>[<span>${todo.priority}</span>]</h4>
                
              </div>
            <div class="todo-count">
              <h2>&lt;<span>${"#" + displayNumber}</span>&gt;</h2>
            </div>
            <div class="todo-task">
              <span 
                >${todo.text}</span
              >
            </div>
            <div class="todo-buttons">
              <button>
                E
              </button>
              <button>
               C
              </button>
              <button data-button="delete">
                D
              </button>
            </div>
          </div>
        </li>`;
  });
  let todoString = todoCards.join("");
  return todoString;
}
