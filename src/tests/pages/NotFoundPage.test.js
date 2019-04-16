import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { NotFoundPage } from "../../pages/NotFoundPage";

let wrapper, history;

beforeEach(() => {
  history = { push: jest.fn() };
  wrapper = shallow(<NotFoundPage history={history} />);
});

test("should render NotFoundPage correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should handle onGoToHome correctly", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
});
