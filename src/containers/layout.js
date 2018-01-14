import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import { Counter, Todos } from 'routes';
import './styles';

const Layout = () => (
  <React.Fragment>
    <Route render={({ location: { pathname } }) => <Header pathname={pathname} />} />
    <Switch>
      <Route path="/todos" component={ Todos } />
      <Route path="/counter" component={ Counter } />
      <Route path="/*" component={ () => <p>404 Not Found</p> } />
    </Switch>
  </React.Fragment>
);

export default Layout;
