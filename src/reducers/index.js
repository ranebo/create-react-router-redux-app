import { combineReducers } from 'redux';
import { count } from './all/counterReducer';
import { user } from './all/userReducer';
import { routerReducer } from 'react-router-redux'

const appReducer = combineReducers({
  count,
  user,
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
