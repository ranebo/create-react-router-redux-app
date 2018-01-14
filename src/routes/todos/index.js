import React from 'react';
import RouteView from 'containers/RouteView';

const Todos = ({ history, location, match }) => (
  <RouteView history={ history } location={ location } match={ match }>
    <main id="todos-container" className="route-container">
      <section className="fit-center raised lg-pad text-center">
        <p>Hello World </p>
        <button onClick={ () => history.push('/counter') }>To Counter</button>
      </section>
    </main>
  </RouteView>
);

export default Todos
