import React from "react";
import { shallow } from "enzyme";
import Comments from "../Comments";

describe("Comments", () => {
  test("renders without props", () => {
    const wrapper = shallow(<Comments />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with amount", () => {
    const wrapper = shallow(<Comments amount={12345} />);
    expect(wrapper).toMatchSnapshot();
  });
});
