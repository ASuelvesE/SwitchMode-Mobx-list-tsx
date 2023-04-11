import Todo from "./Todo";

export default interface Todos {
    todos: Todo[];
    newTodo: string;
    removeTodo: (id: number) => void;
    addTodo: () => void;
    load: (url: string) => void;
  }