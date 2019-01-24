import { AUTH_SIGN_IN_SUCCESS } from '../actions/auth.actions';

const initialState = { id: null, email: null, login: null };

export function user(state = initialState, action) {
  switch (action.type) {
    case AUTH_SIGN_IN_SUCCESS:
      return (({ id, email, login }) => ({ id, email, login }))(action.payload.user);
    default:
      return state;
  }
}