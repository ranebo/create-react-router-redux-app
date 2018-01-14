import React from 'react';
import { connect } from 'react-redux';
import { addTodo, setTodoFilter } from 'actions';
import { TODO_FILTER_OPTIONS } from 'routes/Todos/constants';

class TodosControlsContainer extends React.Component {

  addTodo = (todo) => {
    const payload = {todo: { text: 'Thing' } } || { todo };
    this.props.addTodo(payload);
  }

  setTodoFilter = (filter) => {
    this.props.setTodoFilter(filter);
  }

  render() {
    return (
      <section>
        <div className="fit-center">
          {
            TODO_FILTER_OPTIONS.map(option => (
              <button onClick={ () => this.setTodoFilter(option) }>
                { option }
              </button>
            ))
          }
        </div>
        <div className="fit-center">
          <button onClick={ this.addTodo }>
            Add Todo
          </button>
        </div>
      </section>
    );
  }
};

const mapStateToProps = (state/* , ownProps */) => ({
});

const mapDispatchToProps = (dispatch/* , ownProps */) => ({
  addTodo: payload => dispatch(addTodo(payload)),
  setTodoFilter: filter => dispatch(setTodoFilter(filter)),
});

const ConnectedTodosControls = connect(mapStateToProps, mapDispatchToProps)(TodosControlsContainer);

export default ConnectedTodosControls;
