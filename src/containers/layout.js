import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import { Counter, Todos, Home } from 'routes';
import Miss404 from './Miss404';
import './styles';

const Layout = () => (
  <React.Fragment>
    <Route render={({ location: { pathname } }) => <Header pathname={pathname} />} />
    <Switch>
      <Route exact path="/todos" component={ Todos } />
      <Route exact path="/counter" component={ Counter } />
      <Route exact path="/" component={ Home } />
      <Route component={ Miss404 } />
    </Switch>
  </React.Fragment>
);

export default Layout;
