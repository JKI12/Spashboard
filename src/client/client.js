import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../shared/reducers';
import Dashboard from './dashboard';

import './style.scss';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const devTools = window.devToolsExtension ? window.devToolsExtension() : noop => noop;

const store = createStore(reducers, preloadedState, compose(applyMiddleware(thunkMiddleware), devTools));

render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('root')
);
