import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import employees from './employees';

const reducer = combineReducers({
  employees
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
export * from './employees';
