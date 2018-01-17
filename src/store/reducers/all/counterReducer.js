import createReducer from 'store/reducers/createReducer';
import { Actions } from 'store/actions';

const getInitialCount = () => 0;

const countHandlers = {
  [Actions.SET_COUNT](state, action) {
    return action.payload;
  },
  [Actions.INCREMENT](state, action) {
    return state + 1;
  },
  [Actions.DECREMENT](state, action) {
    return state - 1;
  },
};

export const count = createReducer(getInitialCount(), countHandlers);

