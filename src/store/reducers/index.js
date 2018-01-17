import { persistCombineReducers } from 'redux-persist';
import { count } from './all/counterReducer';
import { todos } from './all/todosReducer';
import { todoFilter } from './all/todoFilterReducer';
import localForage from 'localforage';
import { routerReducer } from 'react-router-redux'

const persistConfig = {
  key: 'app',
  storage: localForage,
  blacklist: ['routing'], // Add then Blacklist globalRequestObjects (for aborting request)
};

const appReducer = persistCombineReducers(persistConfig, {
  count,
  todos,
  todoFilter,
  routing: routerReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    const { routing } = state;
    state = { routing }; // eslint-disable-line no-param-reassign
  }

  return appReducer(state, action);
};

export default rootReducer
