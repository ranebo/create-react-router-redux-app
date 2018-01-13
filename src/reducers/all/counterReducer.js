import createReducer from '../createReducer';
import { Actions } from '../../actions';

// Initial value getter
const getInitialCount = () => 0;

// Builds Handler Object for each action
// Handler Object:
  // paramaters:
    // state:any - current state value
    // action:obj - redux action payload
  // Returns:
    // newState:any - must return new state

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

