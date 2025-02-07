import { combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';
import tasks from './tasks';

const reducer = combineReducers({
  tasks
});
const createStoreWithMiddleware = applyMiddleware(save())(createStore);

export default createStoreWithMiddleware(reducer, load());
