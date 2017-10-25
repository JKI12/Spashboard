import { REQUEST_ARTISTS_SUCCESS, REQUEST_ARTISTS_ERROR } from '../constants';

const initalState = {
  top: [],
  error: ''
};

export default (state = initalState, action) => {
  switch(action.type) {
    case REQUEST_ARTISTS_SUCCESS:
      let top = [];
      const items = action.data.items;

      top = items.map((artist) => {
        return {
          name: artist.name,
          images: artist.images
        }
      });

      return {
        ...state,
        top
      };
    case REQUEST_ARTISTS_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
};
