/* eslint no-use-before-define: 0 no-unused-vars: 0 */
// import settings from 'settings';
// import { get, post } from 'requests';
// import moment from 'moment';
// import _ from 'lodash';
// import { sortByDate, formatDate } from 'functions';
// import { STORED_AUTH_TOKEN } from 'config/constants';
// import { OVERDUE_CLASS, UPCOMING_CLASS, REMAINING_CLASS, COMPLETED_CLASS } from 'components/Portal/constants';

export const Actions = {
  USER_LOGOUT: 'USER_LOGOUT',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SET_COUNT: 'SET_COUNT',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

// Thunk Sources
// https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react
// https://stackoverflow.com/questions/32901466/abort-request-while-navigating-away-from-the-component-in-react

// Higher order sending request using dispatch; Turn into middleware
const sendDispatchRequest = (request, requestArgs, action, processData = data => data) =>
  dispatch => request(...requestArgs, dispatch)
    .then(res => dispatch(action(processData(res.body))))
    .catch(err => ((console.error('Dispatch Request Error:\n', err), Promise.reject(err))));

const setAction = (action, dflt) => (data = dflt) => ({
  type: action,
  payload: data,
});

export const setCount = setAction(Actions.SET_COUNT, 0);

export const increment = setAction(Actions.INCREMENT);
export const decrement = setAction(Actions.DECREMENT);

// ===========================
// User
// ===========================

export const setCurrentUser = setAction(Actions.SET_CURRENT_USER, {});

export const logoutUser = () => ({ type: Actions.USER_LOGOUT });

// export function logout(data = {}) {
//   return dispatch => {
//     const url = `${ settings.API_ROOT }/logout`;
//     return post(url, data, dispatch).then(() => {
//       localStorage.removeItem(STORED_AUTH_TOKEN);
//       dispatch(logoutUser());
//     });
//   };
// }

// export function internalLogin(dispatch, userInfo) {
//   localStorage.setItem(STORED_AUTH_TOKEN, userInfo.token);
//   dispatch(setCurrentUser(userInfo));
// }

// export function login(reqData = false, query = '') {
//   return dispatch => {
//     const url = `${ settings.API_ROOT }/login${ query }`;
//       // internalLogin called by checkForToken function in 'requests'
//     const responseHandler = res => Promise.resolve(res.body.needs_password);
//     if (reqData) {
//       return post(url, reqData, dispatch).then(responseHandler);
//     }
//     return get(url, dispatch).then(responseHandler);
//   };
// }
