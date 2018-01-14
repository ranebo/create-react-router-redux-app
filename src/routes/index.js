import Loadable from 'react-loadable';
import LoadingPage from 'lib/components/LoadingPage';

const makeAsync = loader => (
 Loadable({
    loader,
    delay: 2000,
    timeout: 30000,
    loading: LoadingPage,
  })
);

// Make async components with webpack chunk names
export const Home = makeAsync(() => import(/* webpackChunkName: "route-home" */ './home'));
export const Counter = makeAsync(() => import(/* webpackChunkName: "route-counter" */ './counter'));
export const Todos = makeAsync(() => import(/* webpackChunkName: "route-todos" */ './todos'));
