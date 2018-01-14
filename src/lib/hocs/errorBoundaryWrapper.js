import React from 'react';
import ErrorBoundary from 'lib/components/ErrorBoundary';

const errorBoundaryWrapper = (Component, ProdErrorComponent, DevErrorComponent) =>
  class ErrorBoundaryWrapperComponent extends React.Component {
    render() {
      // TODO: Make Default ErrorComponents for Prod and Dev
      // const ErrorComponent = process.env.NODE_ENV === 'development'
      //   ? (DevErrorComponent || DefaultDevErrorComponent)
      //   : (ProdErrorComponent || DefaultProdErrorComponent);
      const ErrorComponent = ProdErrorComponent;
      return (
        <ErrorBoundary ErrorComponent={ ErrorComponent }>
          <Component { ...this.props } />
        </ErrorBoundary>
      );
    }
  };

export default errorBoundaryWrapper;
