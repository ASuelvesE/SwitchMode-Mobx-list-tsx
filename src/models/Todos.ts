import Todo from "./Todo";

export default interface Todos {
    todos: Todo[];
    newTodo: string;
    isLoading: Boolean;
    removeTodo: (id: number) => void;
    addTodo: () => void;
    load: (url: string) => void;
  }