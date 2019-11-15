import { MOST_POPULAR } from "../actions/video";
import { SUCCESS } from "../actions";
import { createSelector } from "reselect";

const initialState = {
  Id: {},
  mostPopular: {}
};

export default function videos(state = initialState, action) {
  switch (action.type) {
    case MOST_POPULAR[SUCCESS]:
      return reduceFetchMostPopularVideos(action.res, state);
    default:
      return state;
  }
}

function reduceFetchMostPopularVideos(res, prevState) {
  const videoMap = res.items.reduce((acc, video) => {
    acc[video.id] = video;
    return acc;
  }, {});

  let items = Object.keys(videoMap);
  if (res.hasOwnProperty("prevPageToken") && prevState.mostPopular) {
    items = [...prevState.mostPopular.items, ...items];
  }

  const mostPopular = {
    totalResults: res.pageInfo.totalResults,
    nextPageToken: res.nextPageToken,
    items
  };

  return {
    ...prevState,
    mostPopular,
    Id: { ...prevState.Id, ...videoMap }
  };
}

// Selectors
export const getMostPopularVideos = createSelector(
  state => state.videos.Id,
  state => state.videos.mostPopular,
  (videosById, mostPopular) => {
    if (!mostPopular || !mostPopular.items) {
      return [];
    }
    return mostPopular.items.map(videoId => videosById[videoId]);
  }
);