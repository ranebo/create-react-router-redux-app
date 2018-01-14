import React from 'react';
import routeWrapper from 'routes/routeWrapper';

const Home = ({ history }) => (
  <main id="home-container" className="route-container">
    <section className="fit-center raised lg-pad text-center">
      <p>Hello World </p>
      <button onClick={ () => history.push('/counter') }>To Counter</button>
      <button onClick={ () => history.push('/todos') }>To Todos</button>
    </section>
  </main>
);

export default routeWrapper(Home);
