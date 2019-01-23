import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TOGGLE_TASK
  // CREATE_PLAN,
  // DELETE_PLAN,
  // UPDATE_PLAN
} from './constants';

import { result } from './testDate';

export const tasks = (state = [], action = {}) => {
  switch (action.type) {
    case CREATE_TASK:
      return [...state, { id: action.id, text: action.text, completed: false}];
    case TOGGLE_TASK:
      return state.map(task => {
        if ( task.id !== action.id ) {
          return task;
        }
        return { ...task, completed: !task.completed }
      });
    default:
      return state;
  }
}

//
// const initialPlan = { plans: result.entities.plans };
//
// export const plansReducer = (state = initialPlan, action = {}) => {
//   const index = undefined;
//   switch (action.type) {
//     case CREATE_PLAN:
//       return {...state, plans: state.plans.concat([action.payload])};
//     case DELETE_PLAN:
//       index = state.plans.findIndex( value => value.id === action.payload );
//       return {...state, plans: state.plans.concat().splice(index, 1)};
//     case UPDATE_PLAN:
//       index = state.plans.findIndex( value => value.id === action.payload.id );
//       return {...state, plans: state.plans.concat().newArray.splice(index, 1, action.payload)};
//     default:
//       return state;
//   }
// }
