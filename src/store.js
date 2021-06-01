import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(
  reducer,
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
    window.__REDUX_DEVTOOLS_EXTENSION__() :
    f => f
);

export default store;
