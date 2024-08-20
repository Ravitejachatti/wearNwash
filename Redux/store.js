


import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import {reducer as appReducer}  from "./App/reducer";

import {reducer as authReducer}  from "./Auth/reducer";

import { thunk } from "redux-thunk";

const rootReducer = combineReducers({appReducer,authReducer});

export  const store =  legacy_createStore(rootReducer, applyMiddleware(thunk))



