import {
  createAction,
  createRequestTypes,
  REQUEST,
  SUCCESS,
  FAILURE
} from "./index";

export const MOST_POPULAR = createRequestTypes("MOST_POPULAR");
export const mostPopular = {
  request: (amount, loadDescription, nextPageToken) =>
    createAction(MOST_POPULAR[REQUEST], {
      amount,
      loadDescription,
      nextPageToken
    }),
  success: res => createAction(MOST_POPULAR[SUCCESS], { res }),
  failure: res => createAction(MOST_POPULAR[FAILURE], { res })
};

export const VIDEO_CATEGORIES = createRequestTypes("VIDEO_CATEGORIES");
export const categories = {
  request: () => createAction(VIDEO_CATEGORIES[REQUEST]),
  success: res => createAction(VIDEO_CATEGORIES[SUCCESS], { res }),
  failure: res => createAction(VIDEO_CATEGORIES[FAILURE], { res })
};

export const MOST_POPULAR_BY_CATEGORY = createRequestTypes(
  "MOST_POPULAR_BY_CATEGORY"
);
export const mostPopularByCategory = {
  request: categories =>
    createAction(MOST_POPULAR_BY_CATEGORY[REQUEST], { categories }),
  success: (res, categories) =>
    createAction(MOST_POPULAR_BY_CATEGORY[SUCCESS], { res, categories }),
  failure: res => createAction(MOST_POPULAR_BY_CATEGORY[FAILURE], res)
};
