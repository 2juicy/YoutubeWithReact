import React from "react";
import { shallow } from "enzyme";
import NextVid from "../NextVid";

describe("NextVid", () => {
  test("renders", () => {
    const wrapper = shallow(<NextVid />);
    expect(wrapper).toMatchSnapshot();
  });
});
