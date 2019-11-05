import React from "react";
import { shallow } from "enzyme";
import RelatedVids from "../RelatedVids";

describe("RelatedVids", () => {
  test("renders", () => {
    const wrapper = shallow(<RelatedVids />);
    expect(wrapper).toMatchSnapshot();
  });
});
