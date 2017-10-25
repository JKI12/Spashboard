import { REQUEST_AUDIO_FEATURES_SUCCESS, REQUEST_AUDIO_FEATURES_ERROR } from '../../shared/constants';

import { getTracksFeatures } from './spotify';

const topTracksFeaturesSuccess = (data) => {
  return {
    type: REQUEST_AUDIO_FEATURES_SUCCESS,
    data
  };
};

const topTracksFeaturesError = (error) => {
  return {
    type: REQUEST_AUDIO_FEATURES_ERROR,
    error
  };
};

export const requestTrackFeatures = async (dispatch, ids) => {
  await getTracksFeatures(ids)
    .then(data => dispatch(topTracksFeaturesSuccess(data)))
    .catch(error => {
      console.error(error);
      dispatch(topTracksFeaturesError(error))
    });
};
