import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading, Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

import store from "../dao/DaoStore";
import { autorun } from "mobx";
import TodoAdd from "./TodoAdd";
import Todo from "../models/Todo";

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
      {!store.isLoading
        ? <Box>
          {store.todos.map((todo: Todo) => (
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
        </Box>
        : <Box><h1>Loading...</h1></Box>
      }
      <TodoAdd />
    </>
  );
}

export default observer(TodoListItems);

