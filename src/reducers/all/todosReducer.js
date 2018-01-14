import createReducer from 'reducers/createReducer';
import { Actions } from 'actions';

const getInitialTodos = () => [];

const todosHandlers = {
  [Actions.SET_TODOS](state, action) {
    return action.payload;
  },
  [Actions.ADD_TODO](state, action) {
    return action.payload;
  },
  [Actions.UPDATE_TODO](state, action) {
    return action.payload;
  },
  [Actions.REMOVE_TODO](state, action) {
    return action.payload;
  },
};

export const todos = createReducer(getInitialTodos(), todosHandlers);
