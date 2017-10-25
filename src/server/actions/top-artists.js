import { REQUEST_ARTISTS_SUCCESS, REQUEST_ARTISTS_ERROR } from '../../shared/constants';

import { getTopArtists } from './spotify';

const topArtistsSuccess = (data) => {
  return {
    type: REQUEST_ARTISTS_SUCCESS,
    data
  };
};

const topArtistsError = (error) => {
  return {
    type: REQUEST_ARTISTS_ERROR,
    error
  };
};

export const requestTopArtists = async (dispatch, timeFrame) => {
  await getTopArtists(timeFrame)
    .then(data => dispatch(topArtistsSuccess(data)))
    .catch(error => {
      console.error(error);
      dispatch(topArtistsError(error))
    });
};
