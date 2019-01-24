import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TOGGLE_TASK
} from './constants'

let nextTodoId = 0;

export const createTask = (text) => ({
  type: CREATE_TASK,
  id: nextTodoId++,
  text
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  id
})

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id
});

export const updateTask = (id, text) => ({
  type: UPDATE_TASK,
  id,
  text
})
