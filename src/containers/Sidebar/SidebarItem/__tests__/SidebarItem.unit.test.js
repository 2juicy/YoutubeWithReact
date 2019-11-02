import React from "react";
import { shallow } from "enzyme";
import SidebarItem from "../SidebarItem";

describe("SidebarItem", () => {
  test("renders empty SidebarItem", () => {
    const wrapper = shallow(<SidebarItem />);
    expect(wrapper).toMatchSnapshot();
  });
});

test("renders highlighted SideBarItem that navigates to /feed/trending", () => {
  const wrapper = shallow(<SidebarItem label="Trending" icon="fire" />);
  expect(wrapper).toMatchSnapshot();
});
