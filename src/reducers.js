import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TOGGLE_TASK,
  UPDATE_USER,
  LOG_OUT_USER
} from './constants';

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

export const user = (state = {}, action = {}) => {
  switch (action.type) {
    case UPDATE_USER:
      return action.user;
    case LOG_OUT_USER:
      return {};
    default:
      return state;
  }

}
