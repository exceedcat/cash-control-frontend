import { authService } from '../services/auth.service';

export const AUTH_SIGN_IN_REQUEST = 'AUTH_SIGN_IN_REQUEST';
export const AUTH_SIGN_IN_SUCCESS = 'AUTH_SIGN_IN_SUCCESS';
export const AUTH_SIGN_IN_FAILURE = 'AUTH_SIGN_IN_FAILURE';

const signIn = ({ login, password }) => {
  return (dispatch) => {
    dispatch(request());

    authService.signIn({
      login,
      password
    }).then(r => console.log('in action', r));
  };

  function request() {
    return { type: AUTH_SIGN_IN_REQUEST };
  }

  function success(payload) {
    return { type: AUTH_SIGN_IN_SUCCESS, payload };
  }

  function failure() {
    return { type: AUTH_SIGN_IN_FAILURE };
  }
};

export const authActions = {
  signIn
};
