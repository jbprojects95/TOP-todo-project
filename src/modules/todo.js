export default class TodoItem {
  constructor(id, text, dueDate, priority) {
    this.id = id;
    this.text = text;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
}
