import React from 'react';

const Todos = ({ history }) => (
  <main id="todos" className="route-container">
    <section className="fit-center raised lg-pad text-center">
      <p>Hello World </p>
      <button onClick={ () => history.push('/counter') }>To Counter</button>
    </section>
  </main>
);

export default Todos
