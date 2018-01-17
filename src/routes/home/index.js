import React from 'react';
import routeWrapper from 'routes/routeWrapper';

const Home = ({ history }) => (
  <section className="fit-center raised lg-pad text-center">
    <p>Hello World </p>
    <button onClick={ () => history.push('/counter') }>To Counter</button>
    <button onClick={ () => history.push('/todos') }>To Todos</button>
  </section>
);

export default routeWrapper(Home, 'home');
