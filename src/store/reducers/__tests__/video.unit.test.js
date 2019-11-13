import videoReducer from "../video";
import { MOST_POPULAR } from "../../actions/video";
import { SUCCESS } from "../../actions";
import mostPopularResponse from "./responses/MOST_POPULAR_SUCCESS";
import mostPopularSuccessState from "./states/MOST_POPULAR_SUCCESS";

const initialState = {
  Id: {},
  mostPopular: {}
};

describe("videos reducer", () => {
  test("test undefined action type and initial state with videos reducer", () => {
    const expectedEndState = { ...initialState };
    expect(videoReducer(undefined, { type: "some-unused-type" })).toEqual(
      expectedEndState
    );
  });
});
