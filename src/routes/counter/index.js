import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from 'actions';

const Counter = ({ count, increment, decrement}) => (
  <div className="app">
    <p>Count: { count } </p>
    <button onClick={ decrement }> - </button>
    <button onClick={ increment }> + </button>
  </div>
);

const mapStateToProps = (state/* , ownProps */) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch/* , ownProps */) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ConnectedCounter;
