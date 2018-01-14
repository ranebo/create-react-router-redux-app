import React from 'react';
import routeWrapper from 'lib/hocs/routeWrapper';

const Todos = ({ history, location, match }) => (
  <main id="todos-container" className="route-container">
    <section className="fit-center raised lg-pad text-center">
      <p>Hello World </p>
      <button onClick={ () => history.push('/counter') }>To Counter</button>
    </section>
  </main>
);

export default routeWrapper(Todos);
