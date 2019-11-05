import React from "react";
import { shallow } from "enzyme";
import VidPreview from "../VidPreview";

describe("VidPreview", () => {
  test("renders vertically", () => {
    const wrapper = shallow(<VidPreview />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders horizontally", () => {
    const wrapper = shallow(<VidPreview horizontal />);
    expect(wrapper).toMatchSnapshot();
  });
});
