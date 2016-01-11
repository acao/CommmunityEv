export const ACCOUNT_LOGIN = 'ACCOUNT_LOGIN';
export const ACCOUNT_LOGIN_ERROR = 'ACCOUNT_LOGIN_ERROR';
export const ACCOUNT_LOGIN_SUCCESS = 'ACCOUNT_LOGIN_SUCCESS';
export const ACCOUNT_LOGOUT = 'ACCOUNT_LOGOUT';

export function accountLogin(err, res) {
  return (dispatch) => {
    if (err) {
      dispatch({
        type: ACCOUNT_LOGIN_ERROR,
        payload: err,
      });
    } else {
      dispatch({
        type: ACCOUNT_LOGIN_SUCCESS,
        payload: res,
      });
    }
  };
}

export function accountLogout() {
  return (dispatch) => {
    dispatch({
      type: ACCOUNT_LOGOUT,
    });
  };
}
