import createReducer from 'reducers/createReducer';
import { Actions } from 'actions';

const getInitialTodos = () => [];

const todosHandlers = {
  [Actions.SET_TODOS](state, action) {
    return action.payload;
  },
  [Actions.ADD_TODO](state, action) {
    const todo = Object.assign({}, action.payload.todo, {status: (Math.round(Math.random())) });
    return [...state, todo];
  },
  [Actions.UPDATE_TODO](state, action) {
    const todos = state.slice();
    todos[action.payload.index] = action.payload.todo;
    return todos;
  },
  [Actions.REMOVE_TODO](state, action) {
    const todos = state.slice();
    todos.splice(action.payload.index, 1);
    return todos;
  },
};

export const todos = createReducer(getInitialTodos(), todosHandlers);
