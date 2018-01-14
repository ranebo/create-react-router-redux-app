import React from 'react';
import ErrorBoundary from 'lib/components/ErrorBoundary';
import RouteError from 'lib/components/RouteError';

// Source: https://github.com/LWJGL/lwjgl3-www/blob/master/client/containers/PageView.jsx
class RouteView extends React.Component {
  // Remembers last scroll positions
  static scrollPositions = {};

  componentDidMount() {
    const {
      history: { action },
      location: {
        key = 'root',
        pathname,
        search,
      }
    } = this.props;
    let scrollToTop = this.props.location.hash.length === 0;
    const endpoint = `${pathname}${search}`;

    // POP means user is going forward or backward in history, restore previous scroll position
    if (action === 'POP') {
      const pos = RouteView.scrollPositions[key];
      if (pos) {
        window.scroll(pos[0], pos[1]);
        scrollToTop = false;
      }
    }

    if (scrollToTop) {
      // Scroll to top of viewport
      window.scroll(0, 0);
    }
  }

  componentWillUnmount() {
    // Remember scroll position so we can restore if we return to this view via browser history
    const { location: { key = 'root' } } = this.props;
    RouteView.scrollPositions[key] = [window.pageXOffset, window.pageYOffset];
  }

  render() {
    if (process.env.NODE_ENV !== 'development') {
      return this.props.children;
    } else {
      return <ErrorBoundary ErrorComponent={ RouteError }>{this.props.children}</ErrorBoundary>;
    }
  }
}

export default RouteView;
