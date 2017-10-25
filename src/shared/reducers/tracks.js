import { REQUEST_TRACKS_SUCCESS, REQUEST_TRACKS_ERROR } from '../constants';

const initalState = {
  top: [],
  ids: '',
  error: ''
};

export default (state = initalState, action) => {
  switch(action.type) {
    case REQUEST_TRACKS_SUCCESS:
      let top = [];
      const ids = [];

      const items = action.data.items;

      top = items.map((track) => {
        ids.push(track.id);
        return {
          name: track.name,
          images: track.images,
          previewUrl: track.preview_url,
          album: {
            images: track.album.images
          },
          artists: track.artists
        }
      });

      return {
        ...state,
        top,
        ids: ids.join(',')
      };
    case REQUEST_TRACKS_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
};
