/*:: import * as React from 'react'; */


import Counter from './counter/counter';
import Test from './test/test';

export { Counter, Test }

// import Loadable from 'react-loadable';
// import { LoadingPage } from '../components/LoadingPage';

// type PromiseReactModule = () => Promise<{ default: React.ComponentType<any> }>;

// const AR = function(loader: PromiseReactModule): React.ComponentType<any> {
//   return Loadable({
//     loader,
//     delay: 2000,
//     timeout: 30000,
//     loading: LoadingPage,
//   });
// };

// // Import causes routes to be code-split
// // We have to specify each route name/path in order to be statically analyzed by webpack
// export const Home = AR(() => import(/* webpackChunkName: "route-home" */ './home'));
// export const Guide = AR(() => import(/* webpackChunkName: "route-guide" */ './guide'));
// export const Download = AR(() => import(/* webpackChunkName: "route-download" */ './download'));
// export const Customize = AR(() => import(/* webpackChunkName: "route-customize" */ './customize'));
// export const Browse = AR(() => import(/* webpackChunkName: "route-browse" */ './browse'));
// export const Source = AR(() => import(/* webpackChunkName: "route-source" */ './source'));
// export const License = AR(() => import(/* webpackChunkName: "route-license" */ './license'));
