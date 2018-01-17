import { DEFAULT_TODO_FILTER } from 'app/routes/Todos/constants';

export const Actions = {
  SET_COUNT: 'SET_COUNT',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SET_TODOS: 'SET_TODOS',
  ADD_TODO: 'ADD_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  SET_TODO_FILTER: 'SET_TODO_FILTER',
};

// Thunk Sources
// https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react
// https://stackoverflow.com/questions/32901466/abort-request-while-navigating-away-from-the-component-in-react

// Higher order sending request using dispatch; Turn into middleware
const sendDispatchRequest = (request, requestArgs, action, processData = data => data) =>
  dispatch => request(...requestArgs, dispatch)
    .then(res => dispatch(action(processData(res.body))))
    .catch(err => ((console.error('Dispatch Request Error:\n', err), Promise.reject(err))));

const setAction = (action, dflt) => (data = dflt) => ({
  type: action,
  payload: data,
});

// Counter
export const setCount = setAction(Actions.SET_COUNT, 0);
export const increment = setAction(Actions.INCREMENT);
export const decrement = setAction(Actions.DECREMENT);

// Todos
export const setTodos = setAction(Actions.SET_TODOS, []);
export const addTodo = setAction(Actions.ADD_TODO, {});
export const updateTodo = setAction(Actions.UPDATE_TODO);
export const removeTodo = setAction(Actions.REMOVE_TODO);
export const setTodoFilter = setAction(Actions.SET_TODO_FILTER, DEFAULT_TODO_FILTER);
