
/**
createReducer:
  params:
    initialState:any - default state of item
    return handler or pass through current state
*/

const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  }
  return state;
};

export default createReducer;
