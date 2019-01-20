import {
  ADD_TASK
} from './constants';

import { result } from './testDate';

const initialTask = { tasks: result.entities.tasks };

export const tasksReducer = (state = initialTask, action = {}) => {
  switch (action.type) {
    case ADD_TASK:
      state.tasks.push(action.payload);
      return {...state, tasks: state.tasks};
    default:
      return state;
  }
}
