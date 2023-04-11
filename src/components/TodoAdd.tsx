import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

import store from "../dao/DaoStore";

function TodoAdd() {
  return (
    <Grid pt={4} templateColumns="5fr 1fr" columnGap="3">
      <Input
        value={store.newTodo}
        onChange={(evt) => (store.newTodo = evt.target.value)}
        placeholder="New todo"
      />
      <Button onClick={() => store.addTodo()}>Add Todo</Button>
    </Grid>
  );
}

export default observer(TodoAdd);
