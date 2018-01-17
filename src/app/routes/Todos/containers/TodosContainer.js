import React from 'react';
import { connect } from 'react-redux';
import { updateTodo, removeTodo } from 'store/actions';
import Todos from 'app/routes/Todos/components/Todos';
import Todo from 'app/routes/Todos/components/Todo';
import { TODO_STATUSES } from 'app/routes/Todos/constants';

class TodosContainer extends React.Component {

  updateTodo = (todo, index) => {
    const payload = { todo, index };
    this.props.updateTodo(payload);
  }

  removeTodo = (index) => {
    const payload = { index };
    this.props.removeTodo(payload);
  }

  // Handle Todo Components
  getTodos = () => (
    this.props.todos.reduce((todos, todo) => {
      if (
        (this.props.todoFilter === TODO_STATUSES[0] && todo.status) ||
        (this.props.todoFilter === TODO_STATUSES[1] && !todo.status)
      ) return todos;

      return [
        ...todos,
        <Todo
          key={ Math.random() }
          RemoveTodoButton={ () => this.removeTodoButton(todos.length) }
          { ...todo }
        />
      ]
    },
    [])
  )
// ADD IDs
  removeTodoButton = (i) => (
    <button onClick={ () => this.removeTodo(i) }>Remove</button>
  )

  render() {
    return (
      <Todos todos={ this.getTodos() } />
    );
  }
};

const mapStateToProps = (state/* , ownProps */) => ({
  todos: state.todos,
  todoFilter: state.todoFilter,
});

const mapDispatchToProps = (dispatch/* , ownProps */) => ({
  updateTodo: payload => dispatch(updateTodo(payload)),
  removeTodo: payload => dispatch(removeTodo(payload)),
});

const ConnectedTodos = connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

export default ConnectedTodos;
