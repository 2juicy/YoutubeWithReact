import React from "react";
import { shallow } from "enzyme";
import Video from "../Video";

describe("Video", () => {
  test("renders with video", () => {
    const wrapper = shallow(<Video id="LoIxl_ujiO8" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders null, no id", () => {
    const wrapper = shallow(<Video />);
    expect(wrapper).toMatchSnapshot();
  });
});
