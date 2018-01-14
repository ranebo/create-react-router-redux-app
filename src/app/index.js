import React from 'react';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from 'store/configureStore';
import { history } from './history';
import App from './App';

const store = configureStore();

const Application = () => (
  <AppContainer>
    <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <App />
      </ConnectedRouter>
    </Provider>
  </AppContainer>
);

export default Application;
