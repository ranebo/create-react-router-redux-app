import React from 'react';
import ErrorBoundary from 'lib/components/ErrorBoundary';

const DefaultProdErrorComponent = undefined;
const DefaultDevErrorComponent = undefined;

const errorBoundaryWrapper = (Component, ProdErrorComponent = DefaultProdErrorComponent , DevErrorComponent = DefaultDevErrorComponent) =>
  class ErrorBoundaryWrapperComponent extends React.Component {
    render() {
      // TODO: Make Default ErrorComponents for Prod and Dev
      const ErrorComponent = process.env.NODE_ENV === 'development' ? /*DevErrorComponent*/ProdErrorComponent : ProdErrorComponent;
      return (
        <ErrorBoundary ErrorComponent={ ErrorComponent } { ...this.props }>
          <Component { ...this.props } />
        </ErrorBoundary>
      );
    }
  };

export default errorBoundaryWrapper;
