export const ACCOUNT_IS_LOGGING_IN = 'ACCOUNT_IS_LOGGING_IN';
export const ACCOUNT_LOGIN_CANCELLED = 'ACCOUNT_LOGIN_CANCELLED';
export const ACCOUNT_LOGIN_ERROR = 'ACCOUNT_LOGIN_ERROR';
export const ACCOUNT_LOGIN_AUTHENTICATED = 'ACCOUNT_LOGIN_AUTHENTICATED';
export const ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT';

export function accountLogin(err, res) {
  return (dispatch, getState) => {
    if (err) {
      dispatch({
        type: ACCOUNT_LOGIN_ERROR,
        payload: err,
      });
    } else {
      dispatch({
        type: ACCOUNT_LOGIN_AUTHENTICATED,
        payload: res,
      });
    }
  };
}

export function accountLogout() {
  return (dispatch, getState) => {
    dispatch({
      type: ACCOUNT_LOGOUT,
    });
  };
}
