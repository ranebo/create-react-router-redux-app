import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from 'actions';
import routeWrapper from 'routes/routeWrapper';

const Counter = ({ count, increment, decrement }) => (
  <main id="counters-container" className="route-container">
    <section className="fit-center raised lg-pad">
      <p>Count: { count }</p>
      <div className="fit-center">
        <button onClick={ decrement }> - </button>
        <button onClick={ increment }> + </button>
      </div>
    </section>
  </main>
);

const mapStateToProps = (state/* , ownProps */) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch/* , ownProps */) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default routeWrapper(ConnectedCounter);
