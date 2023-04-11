import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

import store from "../dao/DaoStore";
import { autorun } from "mobx";
import TodoAdd from "./TodoAdd";

function TodoListItems() {

  autorun(() => {
    for (let todo of store.todos) {
      if (todo.done) {
        console.log("Checked: ", todo.text)
      }
    }
  })

  return (
    <>
      <Heading>Items: {store.todos.length}</Heading>
      <br />
      {store.todos.map((todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
            onChange={() => todo.done = !todo.done}
            checked={todo.done} />

          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) => (todo.text = evt.target.value)}
          />
          {todo.done &&
            <Button onClick={() => store.removeTodo(todo.id)} >Delete</Button>
          }
        </Flex>
      ))}
      <TodoAdd />
    </>
  );
}

export default observer(TodoListItems);

