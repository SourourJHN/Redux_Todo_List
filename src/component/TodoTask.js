import { Box } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { getTodosByVisibilityFilter } from '../redux/selector';
import { Task } from './Task';

export const TodoTask = () => {
  const{todos,visibilityFilter}=useSelector(state=>state);
  const filterTodos=getTodosByVisibilityFilter(todos,visibilityFilter);
    console.log(todos);
  return (
    <Box my={3}>
       {filterTodos.length?filterTodos.map(todo=>(
         <Task key={'todo-${todo.id}'} todo={todo}/>
       )):<Box textAlign='center' my='4'>No Tasks Yay!!</Box>}
       
    </Box>
    
   
    
  )
}
// 