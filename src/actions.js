import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  CREATE_PLAN,
  DELETE_PLAN
} from './constants'

export const createTask = (taskObj) => ({
  type: CREATE_TASK,
  payload: taskObj
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId
});

export const updateTask = (taskObj) => ({
  type: UPDATE_TASK,
  payload: taskObj
})

export const createPlan = (planObj) => ({
  type: CREATE_PLAN,
  payload: planObj
});

export const deletePlan = (planId) => ({
  type: DELETE_PLAN,
  payload: planId
});
