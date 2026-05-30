export function populateProjectDropDown(options) {
  const projectList = document.getElementById("selectProject");
  // This creates an option element, using the title as what is displayed and id as the value
  options.forEach((option) => {
    projectList.add(new Option(option.title, option.id));
  });
}

export function generateProjectList(projectArray) {
  let projectList = projectArray.map((project) => {
    return `
    <li>
        <a data-project-id=${project.id}>${project.title}</a>
      </li>
    
    `;
  });

  let projectString = projectList.join("");
  return projectString;
}

export function generateTodoCards(projectArray) {
  let todoCards = projectArray.map((todo, index) => {
    let displayNumber = String(index + 1).padStart(4, "0");
    return `<li class="todo-list-item">
        <div class="todo-card ${todo.completed ? "completed" : ""}" data-id="${todo.id}">
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
              <button data-button="edit" popovertarget="editTodo">
                <svg
                  viewBox="0 0 492.49284 492"
                  fill="#e3e3e3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m304.140625 82.472656-270.976563 270.996094c-1.363281 1.367188-2.347656 3.09375-2.816406 4.949219l-30.035156 120.554687c-.898438 3.628906.167969 7.488282 2.816406 10.136719 2.003906 2.003906 4.734375 3.113281 7.527344 3.113281.855469 0 1.730469-.105468 2.582031-.320312l120.554688-30.039063c1.878906-.46875 3.585937-1.449219 4.949219-2.8125l271-270.976562zm0 0"
                  />
                  <path
                    d="m476.875 45.523438-30.164062-30.164063c-20.160157-20.160156-55.296876-20.140625-75.433594 0l-36.949219 36.949219 105.597656 105.597656 36.949219-36.949219c10.070312-10.066406 15.617188-23.464843 15.617188-37.714843s-5.546876-27.648438-15.617188-37.71875zm0 0"
                  />
                </svg>
              </button>
              <button data-button="complete">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#e3e3e3"
                  viewBox="0 0 511.985 511.985"
                >
                  <g>
                    <g>
                      <path
                        d="M500.088,83.681c-15.841-15.862-41.564-15.852-57.426,0L184.205,342.148L69.332,227.276
			c-15.862-15.862-41.574-15.862-57.436,0c-15.862,15.862-15.862,41.574,0,57.436l143.585,143.585
			c7.926,7.926,18.319,11.899,28.713,11.899c10.394,0,20.797-3.963,28.723-11.899l287.171-287.181
			C515.95,125.265,515.95,99.542,500.088,83.681z"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </button>
              <button data-button="delete">
                <svg
                  viewBox="0 0 320.591 320.591"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g id="close_1_">
                      <path
                        d="m30.391 318.583c-7.86.457-15.59-2.156-21.56-7.288-11.774-11.844-11.774-30.973 0-42.817l257.812-257.813c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875l-259.331 259.331c-5.893 5.058-13.499 7.666-21.256 7.288z"
                      />
                      <path
                        d="m287.9 318.583c-7.966-.034-15.601-3.196-21.257-8.806l-257.813-257.814c-10.908-12.738-9.425-31.908 3.313-42.817 11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414-6.35 5.522-14.707 8.161-23.078 7.288z"
                      />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </li>`;
  });
  let todoString = todoCards.join("");
  return todoString;
}

export function renderTodoList(todos) {
  return todos.length ? generateTodoCards(todos) : "<li>No todos yet.</li>";
}
