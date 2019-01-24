import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TOGGLE_TASK
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
    case DELETE_TASK:
      state.splice(state.findIndex((value) => value.id === action.id), 1);
      return state.concat();
    case UPDATE_TASK:
      return state.map(task => {
        if ( task.id !== action.id ) {
          return task;
        }
        return { ...task, text: action.text }
      });
    default:
      return state;
  }
}
