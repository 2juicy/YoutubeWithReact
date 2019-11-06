import React from "react";
import { shallow } from "enzyme";
import VidMetaData from "../VidMetaData";

describe("VidMetaData", () => {
  test("renders without props", () => {
    const wrapper = shallow(<VidMetaData />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with views", () => {
    const wrapper = shallow(<VidMetaData views={123145} />);
    expect(wrapper).toMatchSnapshot();
  });
});
