import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import api from 'middleware/api'
import rootReducer from 'reducers'
import DevTools from 'app/DevTools'
import { historyMiddleware } from 'app/history';
import { persistStore } from 'redux-persist';

const configureStore = preloadedState => {

  // Build Store:
  // createStore(rootReducer, preloadedState, compose(applyMiddleware(middleware1, middlware2, ...dev), ...dev));

  // Get Env Flag
  const isDev = process.env.NODE_ENV;

  // Gather Middleware Args
  let middlewareArgs = [thunk, api, historyMiddleware];

  // Add Dev Middleware if necessary
  if (isDev) {
    const devMiddlewareArgs = [createLogger()];
    middlewareArgs = middlewareArgs.concat(devMiddlewareArgs);
  }

  // Apply Middleware
  const middleware = applyMiddleware(...middlewareArgs);

  // Gather Compose Args
  let composeArgs = [middleware];

  // Add Dev Compose Args if necessary
  if (isDev) {
    const composeDevArgs =  [DevTools.instrument()];
    composeArgs = composeArgs.concat(composeDevArgs);
  }

  // Gather Store Args
  let storeArgs = [rootReducer, preloadedState, compose(...composeArgs)];

  // Create Store
  const store = createStore(...storeArgs);
  const persistor = persistStore(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return { persistor, store };
}

export default configureStore
