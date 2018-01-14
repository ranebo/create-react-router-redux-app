import React from 'react';
import DevTools from './DevTools';
import Layout from 'containers/Layout';
import './styles';

const setEnvTools = (AppComponent) => {
  if (process.env.NODE_ENV === 'development') {
    return () => (
      <React.Fragment>
        <AppComponent />
        <DevTools />
      </React.Fragment>
    )
  }
  return () => <AppComponent />
};

const App = () => (
  <div id='app'>
    <Layout />
  </div>
);

export default setEnvTools(App);
