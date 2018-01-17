import React from 'react';
import routeWrapper from 'app/routes/routeWrapper';
import TodosFilterControls from 'app/routes/Todos/containers/TodosFilterControls';
import AddTodoControls from 'app/routes/Todos/containers/AddTodoControls';
import TodosContainer from 'app/routes/Todos/containers/TodosContainer';
import './styles';

const TodosLayout = () => (
  <React.Fragment>
    <TodosFilterControls />
    <AddTodoControls />
    <TodosContainer />
  </React.Fragment>
);

export default routeWrapper(TodosLayout, 'todos');
