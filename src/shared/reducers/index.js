import { combineReducers } from 'redux';

import artistsReducer from './artists';
import tracksReducer from './tracks';
import audioFeaturesReducer from './audio_features';
import profileReducer from './profile';

export default combineReducers({
  artists: artistsReducer,
  tracks: tracksReducer,
  features: audioFeaturesReducer,
  profile: profileReducer
});
