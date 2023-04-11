import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import TodoListItems from "./components/TodoListItems";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <NavBar />
        <TodoListItems />
      </Box>
    </ChakraProvider>
  );
}
