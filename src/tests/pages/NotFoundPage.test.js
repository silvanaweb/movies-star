import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";

let wrapper;

beforeEach(() => {
	wrapper = shallow(<NotFoundPage />);
});

test("should render NotFoundPage correctly", () => {
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should handle onGoToHome correctly", () => {
	const to = wrapper.find("Link").prop("to");
	expect(to).toBe("/");
});
