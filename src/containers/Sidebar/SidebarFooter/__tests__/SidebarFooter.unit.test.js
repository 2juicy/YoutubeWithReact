import React from "react";
import { shallow } from "enzyme";
import SidebarFooter from "../SidebarFooter";

describe("SidebarFooter", () => {
  test("renders", () => {
    const wrapper = shallow(<SidebarFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
