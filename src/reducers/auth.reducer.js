import { AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from '../actions/auth.actions';

const initialState = { token: null };

export function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SIGN_IN_SUCCESS:
      return { token: action.payload.token };
    case AUTH_SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}