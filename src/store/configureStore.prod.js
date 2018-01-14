import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from 'middleware/api'
import rootReducer from 'reducers'
import { historyMiddleware } from 'app/history';

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk, api, historyMiddleware)
)

export default configureStore
