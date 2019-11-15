import { shallow } from "enzyme";
import HomeContent from "../HomeContent";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "../../../../store/configureStore";

const store = configureStore();

describe("HomeContent", () => {
  test("renders", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <HomeContent />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
