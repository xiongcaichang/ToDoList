let nextTodoId = 0
import * as types from './actionTypes';

export const addTodo = (text,color) => {
  return {
    type: types.ADD_TODO,
    id: nextTodoId++,
    text,
    color
  }
}



export const deleteTodo = (id) => {
  return {
    type: types.DELETE_TODO,
    id
  }
}

export const updateTodo = (id,text,color,complete) => {
  return {
    type: types.UPDATE_TODO,
    id,
    text,
    color,
    complete
  }
}