import createReducer from '../createReducer';
import { Actions } from '../../actions';

const getInitialAuth = () => ({
  isAuthenticated: false,
  user: {},
});

const authHandlers = {
  [Actions.SET_CURRENT_USER](state, action) {
    return {
      isAuthenticated: action.payload.hasOwnProperty('token'),
      user: action.payload,
    };
  },
};

export const user = createReducer(getInitialAuth(), authHandlers);
