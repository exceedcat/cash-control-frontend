import {
  AUTH_SIGN_IN_SUCCESS
} from '../actions/auth.actions';

const initialState = { user: null, access: null, refresh: null };

export function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SIGN_IN_SUCCESS:
      return { ...action.payload };
    default:
      return state;
  }
}