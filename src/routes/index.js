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

export const Counter = makeAsync(() => import('./counter'));
export const Todos = makeAsync(() => import('./todos'))
