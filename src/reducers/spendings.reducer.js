import { AUTH_SIGN_IN_SUCCESS } from '../actions/auth.actions';
import {
  SPENDINGS_ADD_SUCCESS,
  SPENDINGS_REMOVE_SUCCESS
} from '../actions/spendings.actions';

const initialState = [];

export function spendings(state = initialState, action) {
  switch (action.type) {
    case AUTH_SIGN_IN_SUCCESS:
      return (({ spendings }) => [...spendings])(action.payload);
    case SPENDINGS_ADD_SUCCESS:
      return [...state, action.payload];
    case SPENDINGS_REMOVE_SUCCESS:
      return state.filter(spending => spending.id !== action.payload);
    default:
      return state;
  }
}