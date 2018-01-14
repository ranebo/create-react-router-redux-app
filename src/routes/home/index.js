import React from 'react';
import routeWrapper from 'lib/hocs/routeWrapper';

const Home = (props) => (
  <main id="home-container" className="route-container">
    <section className="fit-center raised lg-pad text-center">
      { [...Array(200).keys()].map( i => <p key={ i }>thing {i}</p>) }
    </section>
  </main>
);

export default routeWrapper(Home);
