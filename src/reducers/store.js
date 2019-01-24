import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { auth } from './auth.reducer';
import { user } from './user.reducer';
import { spendings } from './spendings';

export const store = createStore(
  combineReducers({
    auth,
    user,
    spendings
  }),
  composeWithDevTools(applyMiddleware(thunk, logger)),
);