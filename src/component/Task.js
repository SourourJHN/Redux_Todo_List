import { Box, Checkbox, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/action';

export const Task = ({todo}) => {
 const dispatch=useDispatch()
 const [cheked,setChecked]=useState(false);
 
 const handleCheked=()=>dispatch(toggleTodo(todo.id))

  useEffect(()=>{
    setChecked(todo.completed);
  },[todo])

  return (
    <Box mb={1} bgColor='lightcoral' p={2}>
      <Checkbox onChange={handleCheked} colorScheme='teal' isChecked={cheked}>
        <Text as={todo.completed &&'del'}>
          {todo.content}
        </Text>
      </Checkbox>
    </Box>
  )
}
