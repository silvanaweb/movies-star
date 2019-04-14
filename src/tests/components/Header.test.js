import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { Header } from "../../components/Header";

let history, wrapper;

beforeEach(() => {
  history = { push: jest.fn() };
  wrapper = shallow(<Header history={history} />);
});

test("should render Header correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});
