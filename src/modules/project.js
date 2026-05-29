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

  toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) return;
    // this seems to let me toggle the completed state on and off
    todo.completed = !todo.completed;
  }
}
