import React from 'react';
import errorBoundaryWrapper from 'lib/hocs/errorBoundaryWrapper';
import RouteError from 'lib/components/RouteError';

const routeWrapper = (Component) =>
  class RouteWrapperComponent extends React.Component {
    // Do stuff with component lifecycle hooks here
    // Route hit analytics
    // Listen for navigation changes
    // examples: https://github.com/LWJGL/lwjgl3-www/blob/master/client/containers/PageView.jsx
    render() {
      const RouteComponent = errorBoundaryWrapper(Component, RouteError);
      return <RouteComponent { ...this.props } />
    }
  };








export default routeWrapper;
