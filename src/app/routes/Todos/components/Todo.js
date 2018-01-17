import React from 'react';
import { TODO_STATUSES } from 'app/routes/Todos/constants';

const Todo = ({ text, status, RemoveTodoButton }) => (
  <div className="todo lg-pad">
    <p>{ text }</p>
    <p>{ TODO_STATUSES[status] }</p>
    <RemoveTodoButton />
  </div>
);

export default Todo;
