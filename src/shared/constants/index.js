export const REQUEST_ARTISTS_SUCCESS = 'REQUEST_ARTISTS_SUCCESS';
export const REQUEST_ARTISTS_ERROR = 'REQUEST_ARTISTS_ERROR';

export const REQUEST_TRACKS_SUCCESS = 'REQUEST_TRACKS_SUCCESS';
export const REQUEST_TRACKS_ERROR = 'REQUEST_TRACKS_ERROR';

export const REQUEST_AUDIO_FEATURES_SUCCESS = 'REQUEST_AUDIO_FEATURES_SUCCESS';
export const REQUEST_AUDIO_FEATURES_ERROR = 'REQUEST_AUDIO_FEATURES_ERROR';

export const REQUEST_PROFILE_SUCCESS = 'REQUEST_PROFILE_SUCCESS';
export const REQUEST_PROFILE_ERROR = 'REQUEST_PROFILE_ERROR';

export const TIME_FRAMES = [
  'long_term',
  'medium_term',
  'short_term'
];

export const ENDPOINTS = {
  SPOTIFY: 'https://api.spotify.com/'
};

export const SUFFIXEXS = {
  SPOTIFY_TOP_ME: 'v1/me/top',
  SPOTIFY_RECENTLY_PLAYED: 'v1/me/player/recently-played',
  SPOTIFY_AUDIO_FEATURES: 'v1/audio-features',
  SPOTIFY_PROFILE: 'v1/me'
};

export const SPOTIFY_SETTINGS = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  CALLBACK_URL: `${process.env.URL || 'http://localhost:3000'}/callback`
};
