import {
  MOST_POPULAR,
  VIDEO_CATEGORIES,
  MOST_POPULAR_BY_CATEGORY
} from "../actions/video";
import { SUCCESS } from "../actions";
import { createSelector } from "reselect";
import { WATCH_DETAILS } from "../actions/watch";
import { VIDEO_LIST_RESPONSE } from "../api/youtube-response-types";

const initialState = {
  byId: {},
  mostPopular: {},
  categories: {}
};

export default function videos(state = initialState, action) {
  switch (action.type) {
    case MOST_POPULAR[SUCCESS]:
      return reduceFetchMostPopularVideos(action.res, state);
    case VIDEO_CATEGORIES[SUCCESS]:
      return reduceFetchVideoCategories(action.res, state);
    case MOST_POPULAR_BY_CATEGORY[SUCCESS]:
      return reduceFetchMostPopularVideosByCategory(
        action.res,
        action.categories,
        state
      );
    case WATCH_DETAILS[SUCCESS]:
      return reduceWatchDetails(action.res, state);
    default:
      return state;
  }
}

// Reducers
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
    byId: { ...prevState.byId, ...videoMap }
  };
}

function reduceFetchVideoCategories(res, prevState) {
  const categoryMapping = res.items.reduce((acc, category) => {
    acc[category.id] = category.snippet.title;
    return acc;
  }, {});
  return {
    ...prevState,
    categories: categoryMapping
  };
}

function reduceFetchMostPopularVideosByCategory(
  responses,
  categories,
  prevState
) {
  let videoMap = {};
  let byCategoryMap = {};

  responses.forEach((res, index) => {
    if (res.status === 400) return;

    const categoryId = categories[index];
    const { byId, byCategory } = groupVideosByIdAndCategory(res.result);
    videoMap = { ...videoMap, ...byId };
    byCategoryMap[categoryId] = byCategory;
  });

  return {
    ...prevState,
    byId: { ...prevState.byId, ...videoMap },
    byCategory: { ...prevState.byCategory, ...byCategoryMap }
  };
}

function reduceWatchDetails(res, prevState) {
  const videoDetailResponse = res.find(
    r => r.result.kind === VIDEO_LIST_RESPONSE
  );

  const video = videoDetailResponse.result.items[0];

  return {
    ...prevState,
    byId: {
      ...prevState.byId,
      [video.id]: video
    }
  };
}

// Grouping function
function groupVideosByIdAndCategory(res) {
  const videos = res.items;
  const byId = {};
  const byCategory = {
    totalResults: res.pageInfo.totalResults,
    nextPageToken: res.nextPageToken,
    items: []
  };

  videos.forEach(video => {
    byId[video.id] = video;
    const items = byCategory.items;
    if (items && items) {
      items.push(video.id);
    } else {
      byCategory.items = [video.id];
    }
  });

  return { byId, byCategory };
}

// Selectors
export const getMostPopularVideos = createSelector(
  state => state.videos.byId,
  state => state.videos.mostPopular,
  (videosById, mostPopular) => {
    if (!mostPopular || !mostPopular.items) {
      return [];
    }
    return mostPopular.items.map(videoId => videosById[videoId]);
  }
);

export const getVideoCategoryIds = createSelector(
  state => state.videos.categories,
  categories => {
    return Object.keys(categories || {});
  }
);

export const getVideosByCategory = createSelector(
  state => state.videos.byCategory,
  state => state.videos.byId,
  state => state.videos.categories,
  (videosByCategory, videosById, categories) => {
    return Object.keys(videosByCategory || {}).reduce((acc, categoryId) => {
      const videoIds = videosByCategory[categoryId].items;
      const categoryTitle = categories[categoryId];
      acc[categoryTitle] = videoIds.map(videoId => videosById[videoId]);
      return acc;
    }, {});
  }
);

export const videoCategoriesLoaded = createSelector(
  state => state.videos.categories,
  categories => {
    return Object.keys(categories || {}).length !== 0;
  }
);

export const videosByCategoryLoaded = createSelector(
  state => state.videos.byCategory,
  videosByCategory => {
    return Object.keys(videosByCategory || {}).length;
  }
);

export const getVideoById = (state, videoId) => {
  return state.videos.byId[videoId];
};
