import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  CREATE_PLAN,
  DELETE_PLAN
} from './constants';

import { result } from './testDate';

const initialTask = { tasks: result.entities.tasks };

export const tasksReducer = (state = initialTask, action = {}) => {
  switch (action.type) {
    case CREATE_TASK:
      return {...state, tasks: state.tasks.concat([action.payload])};
    case DELETE_TASK:
      const index = state.tasks.findIndex( value => value.id === action.payload );
      const newArray = state.tasks.concat();
      newArray.splice(index, 1);
      return {...state, tasks: newArray};
    default:
      return state;
  }
}

const initialPlan = { plans: result.entities.plans };

export const plansReducer = (state = initialPlan, action = {}) => {
  switch (action.type) {
    case CREATE_PLAN:
      return state;
    case DELETE_PLAN:
      return state;
    default:
      return state;
  }
}
