import {
  ADD_TASK
} from './constants'

export const addTask = (taskObj) => ({
  type: ADD_TASK,
  payload: taskObj
});
