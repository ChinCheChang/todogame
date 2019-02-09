import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TOGGLE_TASK,
  UPDATE_USER,
  LOG_OUT_USER
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

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user
})

export const logOutUser = () => ({
  type: LOG_OUT_USER
})
