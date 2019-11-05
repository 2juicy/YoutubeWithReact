import React from "react";
import { shallow } from "enzyme";
import Layout from "../Layout";

describe("Layout", () => {
  test("renders without props", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with one child", () => {
    const wrapper = shallow(
      <Layout>
        <div>Child</div>
      </Layout>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("renders with children", () => {
    const wrapper = shallow(
      <Layout>
        <div>Child</div>
        <div>
          <h1>Child</h1>
          <p>Child</p>
        </div>
      </Layout>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
