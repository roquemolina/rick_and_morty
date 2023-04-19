import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducer';

import thunkMiddleware from 'redux-thunk';
/* para poder hacer peticiones async */

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* para que pueda usar redux dev tools */

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;