import { legacy_createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { default as thunk } from 'redux-thunk';
import { reducer as appReducer } from './App/reducer';
import { reducer as authReducer } from './Auth/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
