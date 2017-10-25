import axios from 'axios';
import { requestTopArtists } from '../actions/top-artists';
import { requestTopTracks } from '../actions/top-tracks';
import { requestTrackFeatures } from '../actions/audio-features';
import { requestProfile } from '../actions/profile';

import { TIME_FRAMES } from '../../shared/constants';

export default async (ctx, next) => {
  const authToken = ctx.state.user.accessToken;
  const dispatch = ctx.state.store.dispatch;
  axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
  let timeFrame = TIME_FRAMES[0];

  if (ctx.request.query && ctx.request.query.time_frame) {
    const time_frame = ctx.request.query.time_frame;

    if (TIME_FRAMES.includes(time_frame)) {
      timeFrame = time_frame;
    }
  }

  await requestTopArtists(dispatch, timeFrame);

  await requestTopTracks(dispatch, timeFrame);

  const trackIds = ctx.state.store.getState().tracks.ids;
  await requestTrackFeatures(dispatch, trackIds);

  await requestProfile(dispatch);

  await next();
};
