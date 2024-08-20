import { legacy_createStore, combineReducers, applyMiddleware, compose } from 'redux';
import  thunk  from 'redux-thunk';

import { reducer as appReducer } from './App/reducer';
import { reducer as authReducer } from './Auth/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
