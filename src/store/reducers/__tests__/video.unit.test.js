import videoReducer from "../video";

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
