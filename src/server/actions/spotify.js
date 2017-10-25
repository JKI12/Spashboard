import axios from 'axios';

import { ENDPOINTS, SUFFIXEXS } from '../../shared/constants';

export const getTopArtists = (timeFrame) => {
  return new Promise((resolve, reject) => {
    const url = `${ENDPOINTS.SPOTIFY}${SUFFIXEXS.SPOTIFY_TOP_ME}/artists`;

    axios.get(url, {
      params: {
        time_range: timeFrame
      }
    })
      .then(({data}) => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
  });
};

export const getTopTracks = (timeFrame) => {
  return new Promise((resolve, reject) => {
    const url = `${ENDPOINTS.SPOTIFY}${SUFFIXEXS.SPOTIFY_TOP_ME}/tracks`;

    axios.get(url, {
        params: {
          time_range: timeFrame
        }
      })
        .then(({data}) => {
          resolve(data);
        }).catch(error => {
          reject(error);
        });
    });
};

export const getTracksFeatures = (ids) => {
  return new Promise((resolve, reject) => {
    const url = `${ENDPOINTS.SPOTIFY}${SUFFIXEXS.SPOTIFY_AUDIO_FEATURES}`;

    axios({
      url,
      method: 'GET',
      params: {
        ids
      }
    })
      .then(({data}) => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
  });
};

export const getProfile = () => {
  return new Promise((resolve, reject) => {
    const url = `${ENDPOINTS.SPOTIFY}${SUFFIXEXS.SPOTIFY_PROFILE}`;

    axios.get(url)
      .then(({data}) => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
  });
};
