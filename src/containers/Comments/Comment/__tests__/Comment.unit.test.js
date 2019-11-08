import React from "react";
import { shallow } from "enzyme";
import Comment from "../Comment";

describe("Comment", () => {
  test("renders", () => {
    const wrapper = shallow(<Comment />);
    expect(wrapper).toMatchSnapShot();
  });
});
