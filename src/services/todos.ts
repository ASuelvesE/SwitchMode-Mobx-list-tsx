
import Todo from "../models/Todo";

const fetchAll = async (): Promise<Todo[]>  =>  {   
    const resp = await fetch("https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json");
    const todosDB = await resp.json();
    return todosDB;
}

export { fetchAll }