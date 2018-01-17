import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import api from 'middleware/api'
import rootReducer from 'store/reducers'
import DevTools from 'app/DevTools'
import { historyMiddleware } from 'app/history';
import { persistStore } from 'redux-persist';

// Helper function to compile store args:
// createStore(rootReducer, preloadedState, compose(applyMiddleware(middleware1, middlware2, ...middlewareDev), ...composeDev));
const compileStoreArgs = (
  rootReducer,
  preloadedState,
  middlewareArgs = [],
  devMiddlewareArgs = [],
  composeArgs = [],
  composeDevArgs = []
  ) => {
  const isDev = process.env.NODE_ENV;
  if (isDev) middlewareArgs = middlewareArgs.concat(devMiddlewareArgs);
  composeArgs = [applyMiddleware(...middlewareArgs)].concat(composeArgs);
  if (isDev) composeArgs = composeArgs.concat(composeDevArgs);
  return [rootReducer, preloadedState, compose(...composeArgs)];
}

const configureStore = preloadedState => {

  const storeArgs = compileStoreArgs(
    rootReducer,
    preloadedState,
    [thunk, api, historyMiddleware], // Middleware
    [createLogger()], // Dev Middleware
    [], // Compose args
    [DevTools.instrument()] // Dev Compose Args
  )

  // Create Store
  const store = createStore(...storeArgs);

  // Persist Store
  const persistor = persistStore(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('store/reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return { persistor, store };
}

export default configureStore
