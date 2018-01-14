import React from 'react';

class RouteError extends React.Component {
  render() {
    return (
      <main id="route-error-container" className="route-container">
        <section className="raised text-center lg-pad fit-center error-background">
          <h1>Something went wrong!</h1>
          <h3>It appears that the page has crashed. Try refreshing...</h3>
        </section>
      </main>
    );
  }
}

export default RouteError;
