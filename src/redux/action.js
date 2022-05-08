import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from "./actionsTypes";

let nextTodoId=0;
export const addTask=content=>({
 type: ADD_TODO,
 payload:{
     id: ++nextTodoId,
     content
 }
});

export const toggleTodo=id=>({
 type: TOGGLE_TODO,
 payload:{id}
});

export const SetFilter=filter=>({
  type: SET_FILTER,
  payload:{filter}

});