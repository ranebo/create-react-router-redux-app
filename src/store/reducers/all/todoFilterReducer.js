import createReducer from 'store/reducers/createReducer';
import { DEFAULT_TODO_FILTER } from 'routes/Todos/constants';
import { Actions } from 'store/actions';

const getInitialTodoFilter = () => DEFAULT_TODO_FILTER;

const todoFilterHandlers = {
  [Actions.SET_TODO_FILTER](state, action){
    return action.payload;
  }
};

export const todoFilter = createReducer(getInitialTodoFilter(), todoFilterHandlers);
