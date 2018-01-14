import React from 'react';
import routeWrapper from 'routes/routeWrapper';
import TodosControls from 'routes/Todos/containers/TodosControls';
import TodosContainer from 'routes/Todos/containers/TodosContainer';
import './styles';

class TodosLayout extends React.Component {
  render() {
    return (
      <main id="todos-container" className="route-container">
        <TodosControls />
        <TodosContainer />
      </main>
    );
  }
};

export default routeWrapper(TodosLayout);
