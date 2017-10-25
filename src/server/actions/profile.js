import { REQUEST_PROFILE_SUCCESS, REQUEST_PROFILE_ERROR } from '../../shared/constants';

import { getProfile } from './spotify';

const profileSuccess = (data) => {
  return {
    type: REQUEST_PROFILE_SUCCESS,
    data
  };
};

const profileError = (error) => {
  return {
    type: REQUEST_PROFILE_ERROR,
    error
  };
};

export const requestProfile = async (dispatch) => {
  await getProfile()
    .then(data => dispatch(profileSuccess(data)))
    .catch(error => {
      console.error(error);
      dispatch(profileError(error))
    });
};
