import React from 'react';
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import LoadingPage from 'lib/components/LoadingPage';
import configureStore from 'store/configureStore';
import { history } from './history';
import App from './App';


const { persistor, store } = configureStore();

const onBeforeLift = () => {
  // take some action before the gate lifts
};

const Application = () => (
  <AppContainer>
    <Provider store={ store }>
      <PersistGate
        loading= {<LoadingPage /> }
        onBeforeLift={ onBeforeLift }
        persistor={ persistor }>
        <ConnectedRouter history={ history }>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </AppContainer>
);

export default Application;
