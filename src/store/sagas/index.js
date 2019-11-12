import { all, call, put, fork } from "redux-saga/effects";
import { watchMostPopularVideos } from "./video";

export default function*() {
  yield all([fork(watchMostPopularVideos)]);
}

export function* fetchEntity(request, entity, ...args) {
  try {
    const res = yield call(request);
    yield put(entity.success(res.result, ...args));
  } catch (err) {
    yield put(entity.failure(err, ...args));
  }
}
