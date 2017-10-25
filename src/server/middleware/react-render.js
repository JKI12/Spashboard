import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import Dashboard from '../../client/dashboard';
import IndexView from '../view/index';

const renderPage = (html, preloadedState) => {
  return IndexView(html, preloadedState);
};

export default async (ctx, done) => {
  const store = ctx.state.store;

  await done();

  const html = renderToString(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );

  const preloadedState = ctx.state.store.getState();

  ctx.body = renderPage(html, preloadedState);
};
