export default class Project {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
