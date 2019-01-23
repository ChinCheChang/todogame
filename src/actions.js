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

// export const deleteTask = (taskId) => ({
//   type: DELETE_TASK,
//   payload: taskId
// });
//
// export const updateTask = (taskObj) => ({
//   type: UPDATE_TASK,
//   payload: taskObj
// })
