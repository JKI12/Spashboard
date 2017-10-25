import { createStore } from 'redux';
import reducers from '../../shared/reducers';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default async (ctx, next) => {
  const store = createStore(reducers, applyMiddleware(thunkMiddleware));
  ctx.state.store = store;

  await next();
};
