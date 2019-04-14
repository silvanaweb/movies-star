import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { Filters } from "../../components/Filters";

let history, wrapper;

beforeEach(() => {
  history = { push: jest.fn() };
  wrapper = shallow(<Filters history={history} />);
});

test("should render Header correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});
