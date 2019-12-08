import {
  createAction,
  createRequestTypes,
  REQUEST,
  SUCCESS,
  FAILURE
} from "./index";

export const WATCH_DETAILS = createRequestTypes("WATCH_DETAILS");

export const details = {
  request: videoId => createAction(WATCH_DETAILS[REQUEST], { videoId }),
  success: res => createAction(WATCH_DETAILS[SUCCESS], { res }),
  failure: res => createAction(WATCH_DETAILS[FAILURE], { res })
};
