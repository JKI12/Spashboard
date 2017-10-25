import { getProfile } from '../actions/spotify';
import axios from 'axios';
import moment from 'moment';

export default async (ctx, next) => {
  const expires = ctx.state.user && ctx.state.user.expires || '';
  let expired = true;

  if (moment(moment().toISOString()).isBefore(expires)) {
    expired = false;
  }

  if (ctx.isAuthenticated() && !expired) {
    return next();
  }

  ctx.redirect('/auth/spotify');
};
