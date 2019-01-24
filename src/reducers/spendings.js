import { AUTH_SIGN_IN_SUCCESS } from '../actions/auth.actions';

const initialState = [];

export function spendings(state = initialState, action) {
  switch (action.type) {
    case AUTH_SIGN_IN_SUCCESS:
      return (({ spendings }) => [...spendings])(action.payload);
    default:
      return state;
  }
}