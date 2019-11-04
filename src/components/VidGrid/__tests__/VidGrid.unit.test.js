import React from "react";
import { shallow } from "enzyme";
import VidGrid from "../VidGrid";

describe("VidGrid", () => {
  test("renders without props", () => {
    const wrapper = shallow(<VidGrid />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with title prop", () => {
    const wrapper = shallow(<VidGrid title="Trending" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders without divider", () => {
    const wrapper = shallow(<VidGrid title="Trending" hideDivider />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with empty string header", () => {
    const wrapper = shallow(<span className="title"></span>);
    expect(wrapper).toMatchSnapshot();
  });
});
