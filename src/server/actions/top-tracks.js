import { REQUEST_TRACKS_SUCCESS, REQUEST_TRACKS_ERROR } from '../../shared/constants';

import { getTopTracks } from './spotify';

const topTracksSuccess = (data) => {
  return {
    type: REQUEST_TRACKS_SUCCESS,
    data
  };
};

const topTracksError = (error) => {
  return {
    type: REQUEST_TRACKS_ERROR,
    error
  };
};

export const requestTopTracks = async (dispatch, timeFrame) => {
  await getTopTracks(timeFrame)
    .then(data => dispatch(topTracksSuccess(data)))
    .catch(error => {
      console.error(error);
      dispatch(topTracksError(error))
    });
};
