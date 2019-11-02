import React from "react";
import { shallow } from "enzyme";
import SidebarHeader from "../SidebarHeader";

describe("SidebarHeader", () => {
  test("renders", () => {
    const wrapper = shallow(<SidebarHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
