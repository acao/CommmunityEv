import {
  ACCOUNT_LOGIN,
  ACCOUNT_LOGIN_ERROR,
  ACCOUNT_LOGOUT,
} from '../actions/accountActions';

import { createReducer } from '../reducers';
const initialState = [{
  account: null,
  isLoggedIn: false,
}];
export const accountHandlers = createReducer([], {
  [ACCOUNT_LOGIN]: (state, action) => {
    return Object.assign({}, state, {
      isLoggedIn: true,
      account: action.payload.data,
    });
  },
  [ACCOUNT_LOGIN_ERROR]: (state) => {
    return Object.assign({}, state, {
      isLoggedIn: false,
    });
  },
  [ACCOUNT_LOGOUT]: (state) => {
    return Object.assign({}, state, {
      isLoggedIn: false,
      account: null,
    });
  },
}, initialState);
