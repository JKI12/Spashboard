import { REQUEST_PROFILE_SUCCESS, REQUEST_PROFILE_ERROR } from '../constants';

const initalState = {
  name: '',
  followers: 0,
  profileImage: '',
  error: ''
};

export default (state = initalState, action) => {
  switch(action.type) {
    case REQUEST_PROFILE_SUCCESS:
      const profile = action.data;

      return {
        ...state,
        name: profile.display_name,
        country: profile.country,
        followers: profile.followers.total,
        profileImage: profile.images[0].url
      };
    case REQUEST_PROFILE_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
};
