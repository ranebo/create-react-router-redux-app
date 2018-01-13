import React from 'react';

const Todos = ({ history }) => (
  <div>
    <p>Hello World </p>
    <button onClick={ () => history.push('/counter') }>To Counter</button>
  </div>
);

export default Todos
