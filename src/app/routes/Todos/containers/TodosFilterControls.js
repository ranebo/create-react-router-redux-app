import React from 'react';
import { connect } from 'react-redux';
import { setTodoFilter } from 'store/actions';
import { TODO_FILTER_OPTIONS } from 'app/routes/Todos/constants';

class TodosFilterControlsContainer extends React.Component {

  renderTodosButtons = () => (
    TODO_FILTER_OPTIONS.map(option => (
      <button className={ this.props.todoFilter === option ? 'main-btn-active' : 'main-btn' } onClick={ () => this.props.setTodoFilter(option) }>
        { option }
      </button>
    ))
  )

  render() {
    return (
      <section className="fit-center">
        { this.renderTodosButtons() }
      </section>
    );
  }
};

const mapStateToProps = (state/* , ownProps */) => ({
  todoFilter: state.todoFilter,
});

const mapDispatchToProps = (dispatch/* , ownProps */) => ({
  setTodoFilter: filter => dispatch(setTodoFilter(filter)),
});

const ConnectedTodosFilterControls = connect(mapStateToProps, mapDispatchToProps)(TodosFilterControlsContainer);

export default ConnectedTodosFilterControls;
