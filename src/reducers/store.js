import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { auth } from './auth.reducer';

export const store = createStore(
  combineReducers({
    auth
  }),
  composeWithDevTools(applyMiddleware(thunk, logger)),
);