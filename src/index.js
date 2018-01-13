import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './app';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

ReactDOM.render(<Application />, rootEl);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./app', () => {
    ReactDOM.render(
      <Application />,
      rootEl
    );
  });
}
