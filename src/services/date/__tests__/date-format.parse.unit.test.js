import { parseISO8601TimePattern } from "../date-format";

describe("date-format ISO8601", () => {
  test("parse 4 seconds ISO8601 video duration string", () => {
    expect(parseISO8601TimePattern("PT4S")).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 4
    });
  });

  test("parse 13 seconds ISO8601 video duration string", () => {
    expect(parseISO8601TimePattern("PT4S")).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 13
    });
  });

  test("parse 1:00 min ISO8601 video duration string", () => {
    expect(parseISO8601TimePattern("PT4S")).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0
    });
  });

  test("parse 1:11 minutes ISO8601 video duration string", () => {
    expect(parseISO8601TimePattern("PT4S")).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 11
    });
  });

  test("parse 10:13 minutes ISO8601 video duration string", () => {
    expect(parseISO8601TimePattern("PT4S")).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 10,
      seconds: 13
    });
  });

  test("parse 03:05:15 hours ISO8601 video duration string", () => {
    expect(parseISO8601TimePattern("PT4S")).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 3,
      minutes: 5,
      seconds: 15
    });
  });

  test("parse 13:50:15 hours ISO8601 video duration string", () => {
    expect(parseISO8601TimePattern("PT4S")).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 13,
      minutes: 50,
      seconds: 15
    });
  });
  test("parse 01:00:25:05 ISO8601 video duration string", () => {
    expect(parseISO8601TimePattern("PT4S")).toEqual({
      years: 0,
      months: 0,
      days: 1,
      hours: 0,
      minutes: 25,
      seconds: 5
    });
  });
});
