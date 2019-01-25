import { authService } from '../services/auth.service';

export const AUTH_SIGN_IN_REQUEST = 'AUTH_SIGN_IN_REQUEST';
export const AUTH_SIGN_IN_SUCCESS = 'AUTH_SIGN_IN_SUCCESS';
export const AUTH_SIGN_IN_FAILURE = 'AUTH_SIGN_IN_FAILURE';

export const AUTH_SIGN_UP_REQUEST = 'AUTH_SIGN_UP_REQUEST';
export const AUTH_SIGN_UP_SUCCESS = 'AUTH_SIGN_UP_SUCCESS';
export const AUTH_SIGN_UP_FAILURE = 'AUTH_SIGN_UP_FAILURE';

const signIn = ({ login, password }) => {
  return async (dispatch) => {
    dispatch(request());

    try {
      const result = await authService.signIn({
        login,
        password
      });

      dispatch(success(result));
    }
    catch (e) {
      dispatch(failure());
    }
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

const signUp = ({ login, password, email, history }) => {
  return async (dispatch) => {
    dispatch(request());

    try {
      const result = await authService.signUp({
        login,
        password,
        email
      });

      dispatch(success(result));
      history.push("/sigin");
    }
    catch (e) {
      dispatch(failure());
    }
  };

  function request() {
    return { type: AUTH_SIGN_UP_REQUEST };
  }

  function success(payload) {
    return { type: AUTH_SIGN_UP_SUCCESS, payload };
  }

  function failure() {
    return { type: AUTH_SIGN_UP_FAILURE };
  }
};

export const authActions = {
  signIn,
  signUp
};
