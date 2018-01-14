import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from 'app';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

const render = Component => {
  ReactDOM.render(<Component />, rootEl);
}

render(Application);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./app', () => {
    render(Application);
  });
}
