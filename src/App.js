import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import { AddTask } from "./component/AddTask";
import { TodoTask } from "./component/TodoTask";
import { VisibilityFilter } from "./component/VisibilityFilter";


function App() {
  return (
    <Container maxW='container.sm'>
      <Heading marginY='4'>Todo Task</Heading>
      <AddTask/>
      <TodoTask/>
      <VisibilityFilter/>
    </Container>
  );
}

export default App;



// Objective
// In this checkpoint, we are going to use what we
// have learned previously to create a ToDo Application while using Redux to manage the global state.
// Instructions
// Create  the following component:
// Addtask
// ListTask
// Task
// Every task should have the following attributes:I d, description, isDone
// The user should be:
// Able to add a newTodo
// Filter the tasks by (done/not)
// Edit a task