import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoListItems from "./components/TodoListItems";
import TodoAdd from "./components/TodoAdd";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar />
        <TodoListItems />
        <TodoAdd />
      </Box>
    </ChakraProvider>
  );
}
