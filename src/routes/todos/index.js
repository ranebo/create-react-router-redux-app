import React from 'react';
import routeWrapper from 'routes/routeWrapper';
import TodosFilterControls from 'routes/Todos/containers/TodosFilterControls';
import AddTodoControls from 'routes/Todos/containers/AddTodoControls';
import TodosContainer from 'routes/Todos/containers/TodosContainer';
import './styles';

const TodosLayout = () => (
  <React.Fragment>
    <TodosFilterControls />
    <AddTodoControls />
    <TodosContainer />
  </React.Fragment>
);

export default routeWrapper(TodosLayout, 'todos');
