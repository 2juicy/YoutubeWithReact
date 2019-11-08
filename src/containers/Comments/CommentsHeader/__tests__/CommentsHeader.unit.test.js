import React from "react";
import { shallow } from "enzyme";
import CommentsHeader from "../CommentsHeader";

describe("CommentsHeader", () => {
  test("renders without props", () => {
    const wrapper = shallow(<CommentsHeader />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with amount", () => {
    const wrapper = shallow(<CommentsHeader amount={12345} />);
    expect(wrapper).toMatchSnapshot();
  });
});
