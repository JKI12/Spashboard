import { REQUEST_AUDIO_FEATURES_SUCCESS, REQUEST_AUDIO_FEATURES_ERROR } from '../constants';

const initalState = {
  metrics: {},
  error: ''
};

export default (state = initalState, action) => {
  switch(action.type) {
    case REQUEST_AUDIO_FEATURES_SUCCESS:
      const { audio_features } = action.data;
      if (audio_features[0]) {
        let averageDanceability = 0;
        let averageEnergy = 0;
        let averageTempo = 0;
        let averageDuration = 0;
  
        audio_features.forEach((feature) => {
          const { danceability, energy, tempo, duration_ms } = feature;
          averageDanceability += danceability;
          averageEnergy += energy;
          averageTempo += tempo;
          averageDuration += duration_ms;
        }, this);
  
        const len = audio_features.length;
        averageDanceability /= len;
        averageEnergy /= len;
        averageTempo /= len;
        averageDuration /= len;
  
        return {
          ...state,
          metrics: {
            averageDanceability: averageDanceability.toFixed(2),
            averageEnergy: averageEnergy.toFixed(2),
            averageTempo: averageTempo.toFixed(2),
            averageDuration: averageDuration
          }
        };
      } else {
        return state;
      }
    case REQUEST_AUDIO_FEATURES_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
};
