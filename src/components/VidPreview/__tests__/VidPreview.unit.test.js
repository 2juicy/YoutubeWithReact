import React from "react";
import { shallow } from "enzyme";
import VidPreview from "../VidPreview";

describe("VidPreview", () => {
  test("renders", () => {
    const wrapper = shallow(<VidPreview />);
    expect(wrapper).toMatchSnapshot();
  });
});
