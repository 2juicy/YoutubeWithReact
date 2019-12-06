import { fork, take } from "redux-saga/effects";
import * as watchActions from "../actions/watch";
import { REQUEST } from "../actions";

export function* watchWatchDetails() {
  while (true) {
    const { videoId } = yield take(watchActions.WATCH_DETAILS[REQUEST]);
    yield fork(fetchWatchDetails, videoId);
  }
}
