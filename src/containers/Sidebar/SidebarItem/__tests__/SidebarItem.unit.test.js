import React from "react";
import { shallow } from "enzyme";
import SidebarItem from "../SidebarItem";

const location = { pathname: "/feed/trending" };

describe("SidebarItem", () => {
  test("renders empty SidebarItem without path", () => {
    const wrapper = shallow(<SidebarItem location={location} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders highlighted SideBarItem", () => {
    const wrapper = shallow(
      <SidebarItem
        highlighted
        label="Trending"
        icon="fire"
        location={location}
        path={"/feed/trending"}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("render non-highlighted SideBarItem", () => {
    const wrapper = shallow(
      <SidebarItem label="Trending" icon="fire" location={location} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
