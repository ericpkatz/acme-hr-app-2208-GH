import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import employees from './employees';
import bios from './bios';

const reducer = combineReducers({
  employees,
  bios
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
export * from './employees';
export * from './bios';
