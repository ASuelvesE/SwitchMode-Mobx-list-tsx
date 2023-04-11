import { autorun, makeAutoObservable } from "mobx";
import Todo from "../models/Todo";
import Todos from "../models/Todos";
import { fetchAll } from "../services/todos";

// MobX implementation
class DaoStore implements Todos {
  todos: Todo[] = [];
  newTodo: string = "";
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => {
      return todo.id !== id;
    });
  }

  addTodo() {
    if (this.newTodo) {
      const newTodo: Todo = {
        id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
        text: this.newTodo,
        done: false
      }
      this.todos.push(newTodo);
      this.isLoading = false;
      this.newTodo = "";
    }
  }

  async load() {
    this.isLoading = true;
    this.todos = await fetchAll();
    this.isLoading = false;
  }
}

const store = new DaoStore();

export default store;
