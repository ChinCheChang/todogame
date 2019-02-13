import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  TOGGLE_TASK,
  GET_TASK,
  UPDATE_USER,
  LOG_OUT_USER
} from './constants';

export const tasks = (state = [], action = {}) => {
  switch (action.type) {
    case CREATE_TASK:
      return [...state, { id: action.id, title: action.title, contents: '', authorid: action.authorid, completed: false}];
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
        return { ...task, title: action.title }
      });
    case GET_TASK:
      return [...action.tasks]
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
