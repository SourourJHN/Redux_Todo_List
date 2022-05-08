import { Button, Flex, FormControl, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action';

export const AddTask = () => {
  const dispatch=useDispatch();
  const [value,setValue]= useState('');

  const handleSubmit=e=>{
    e.preventDefault();
    dispatch(addTask(value))
    setValue('');
  }

  const handleInput=e=>{
    setValue(e.target.value)  
  }

  
  return (
    <form onSubmit={handleSubmit}>
     <Flex>
      <FormControl>
        <Input type='text'
               value={value}
               onChange={handleInput}
               borderTopRightRadius={0}
               borderBottomRightRadius={0}
        />
      </FormControl>
      <Button colorScheme='teal'
              type='submit'
              disabled={!value}
              borderTopLeftRadius={0}
              borderBottomLeftRadius={0}
      >Add Task</Button>
     </Flex>
    </form>
  )
}
