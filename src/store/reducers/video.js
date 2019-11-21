import {
  MOST_POPULAR,
  VIDEO_CATEGORIES,
  MOST_POPULAR_BY_CATEGORY
} from "../actions/video";
import { SUCCESS } from "../actions";
import { createSelector } from "reselect";

const initialState = {
  Id: {},
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
        action.categies,
        state
      );
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

function reduceFetchMostPopularVideosByCategory(res, categories, prevState) {
  let videoMap = {};
  let byCategoryMap = {};

  res.forEach((res, index) => {
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
    items ? items.push(video.id) : (byCategory.id = [video.id]);
  });
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

export const getVideoCategoryIds = createSelector(
  state => state.videos.categories,
  categories => {
    return Object.keys(categories || {});
  }
);
