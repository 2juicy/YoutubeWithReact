import { YOUTUBE_LIBRARY_LOADED } from "../actions/api";

const initialState = {
  libraryLoaded: false
};

const getYoutubeLibraryLoaded = (state = initialState, action) => {
  switch (action.type) {
    case YOUTUBE_LIBRARY_LOADED:
      return {
        libraryLoaded: true
      };
    default:
      return false;
  }
};

export default getYoutubeLibraryLoaded;
