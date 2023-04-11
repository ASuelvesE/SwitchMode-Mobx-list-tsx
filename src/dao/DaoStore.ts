import { makeAutoObservable } from "mobx";
import Todo from "../models/Todo";
import Todos from "../models/Todos";

// MobX implementation
class DaoStore implements Todos {
  todos: Todo[] = [];
  newTodo: string = "";

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
      this.todos.push(newTodo)
      this.newTodo = "";
    }
  }

  load(url: string) {
    fetch(url)
      .then((resp) => resp.json())
      .then((todosDB: Todo[]) => (store.todos = todosDB));
  }
}

const store = new DaoStore();

export default store;
