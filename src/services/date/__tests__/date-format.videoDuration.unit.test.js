import { getVideoDurationString } from "../date-format";

describe("services/date-format getVideoDurationString()", () => {
  test("getVideoDurationString() formats 4s video", () => {
    expect(getVideoDurationString("PT4S")).toEqual("0:04");
  });

  test("getVideoDurationString() formats 13s video", () => {
    expect(getVideoDurationString("PT13S")).toEqual("0:13");
  });

  test("getVideoDurationString() formats 1:00 min video", () => {
    expect(getVideoDurationString("PT1M")).toEqual("1:00");
  });

  test("getVideoDurationString() formats 1:29 min video", () => {
    expect(getVideoDurationString("PT1M29S")).toEqual("1:29");
  });

  test("getVideoDurationString() formats 10:10 min video", () => {
    expect(getVideoDurationString("PT10M10S")).toEqual("10:10");
  });

  test("getVideoDurationString() formats 3:04:15 hours video", () => {
    expect(getVideoDurationString("PT3H4M15S")).toEqual("3:04:15");
  });

  test("getVideoDurationString() formats 13:33:44 hours video", () => {
    expect(getVideoDurationString("PT13H33M44S")).toEqual("13:33:44");
  });

  test("getVideoDurationString() formats 01:00:35:05 video", () => {
    expect(getVideoDurationString("P1DT35M5S")).toEqual("24:35:05");
  });
});
