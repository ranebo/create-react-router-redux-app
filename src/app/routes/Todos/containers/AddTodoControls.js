import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'store/actions';

class TodosControlsContainer extends React.Component {

  addTodo = (todo) => {
    const payload = { todo: { text: 'Thing' } } || { todo };
    this.props.addTodo(payload);
  }

  render() {
    return (
      <section className="fit-center">
        <button onClick={ this.addTodo }>
          Add Todo
        </button>
      </section>
    );
  }
};

const mapStateToProps = (state/* , ownProps */) => ({
});

const mapDispatchToProps = (dispatch/* , ownProps */) => ({
  addTodo: todo => dispatch(addTodo(todo)),
});

const ConnectedTodosControls = connect(mapStateToProps, mapDispatchToProps)(TodosControlsContainer);

export default ConnectedTodosControls;
