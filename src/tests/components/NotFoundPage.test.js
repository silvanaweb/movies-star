import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { NotFoundPage } from "../../pages/NotFoundPage";

test("should render NotFoundPage correctly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
