import { all, call, put, fork } from "redux-saga/effects";
import {
  watchMostPopularVideos,
  watchMostPopularVideosByCategory,
  watchVideoCategories
} from "./video";

export default function*() {
  yield all([
    fork(watchMostPopularVideos),
    fork(watchVideoCategories),
    fork(watchMostPopularVideosByCategory)
  ]);
}

export function* fetchEntity(request, entity, ...args) {
  try {
    const res = yield call(request);
    yield put(entity.success(res.result, ...args));
  } catch (err) {
    yield put(entity.failure(err, ...args));
  }
}

export function ignoreErrors(fn, ...args) {
  return () => {
    const ignoreErrorCallback = res => res;
    return fn(...args).then(ignoreErrorCallback, ignoreErrorCallback);
  };
}
