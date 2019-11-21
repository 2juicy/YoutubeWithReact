import { fork, take, takeEvery, call, put, all } from "redux-saga/effects";
import * as api from "../api/youtube-api";
import * as videoActions from "../actions/video";
import { REQUEST } from "../actions";
import { fetchEntity, ignoreErrors } from "./index";

export function* watchMostPopularVideos() {
  while (true) {
    const { amount, loadDescription, nextPageToken } = yield take(
      videoActions.MOST_POPULAR[REQUEST]
    );
    yield fork(fetchMostPopularVideos, amount, loadDescription, nextPageToken);
  }
}

export function* fetchMostPopularVideos(
  amount,
  loadDescription,
  nextPageToken
) {
  const request = api.buildMostPopularVideosRequest.bind(
    null,
    amount,
    loadDescription,
    nextPageToken
  );
  yield fetchEntity(request, videoActions.mostPopular);
}

export function* watchMostPopularVideosByCategory() {
  while (true) {
    const { categories } = yield take(
      videoActions.MOST_POPULAR_BY_CATEGORY[REQUEST]
    );
    yield fork(fetchMostPopularVideosByCategory, categories);
  }
}

export function* fetchMostPopularVideosByCategory(categories) {
  const req = categories.map(category => {
    const wrapper = ignoreErrors(
      api.buildMostPopularVideosRequest,
      12,
      false,
      null,
      category
    );
    return call(wrapper);
  });
  try {
    const res = yield all(req);
    yield put(videoActions.mostPopularByCategory.success(res, categories));
  } catch (err) {
    yield put(videoActions.mostPopularByCategory.failure(err));
  }
}

export function* watchVideoCategories() {
  yield takeEvery(videoActions.VIDEO_CATEGORIES[REQUEST], fetchVideoCategories);
}

export const fetchVideoCategories = () =>
  fetchEntity(api.buildVideoCategoriesRequest, videoActions.categories);
