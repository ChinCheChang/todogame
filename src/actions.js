import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TOGGLE_TASK,
  UPDATE_USER,
  LOG_OUT_USER,
  GET_TASK
} from './constants'

let nextTodoId = -1;

export const getTask = (tasks) => ({
  type: GET_TASK,
  tasks
})

export const createTask = (title, authorid = -1, id = nextTodoId--) => ({
  type: CREATE_TASK,
  id,
  title,
  authorid
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  id
})

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id
});

export const updateTask = (id, title) => ({
  type: UPDATE_TASK,
  id,
  title
})

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user
})

export const logOutUser = () => ({
  type: LOG_OUT_USER
})
