import React from "react";
import { shallow } from "enzyme";
import VidInfoBox from "../VidInfoBox";

describe("VidInfoBox", () => {
  test("renders", () => {
    const wrapper = shallow(<VidInfoBox />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders expanded", () => {
    const wrapper = shallow(<VidInfoBox hook={() => setToggle(false)} />);
    expect(wrapper).toMatchSnapshot();
  });
});
