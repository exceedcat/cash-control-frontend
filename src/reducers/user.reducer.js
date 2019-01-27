import { AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from '../actions/auth.actions';

const initialState = { id: null, email: null, login: null };

export function user(state = initialState, action) {
  switch (action.type) {
    case AUTH_SIGN_IN_SUCCESS:
      return (({ id, email, login }) => ({
        id,
        email,
        login
      }))(action.payload.user);
    case AUTH_SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}