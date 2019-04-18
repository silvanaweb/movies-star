import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";

let wrapper;

beforeEach(() => {
	wrapper = shallow(<ErrorPage errorMessage={""} />);
});

test("should render ErrorPage correctly", () => {
	expect(toJSON(wrapper)).toMatchSnapshot();
});
test("should render ErrorPage wit message correctly", () => {
	wrapper.setProps({
		errorMessage: "An error occurred",
	});
	expect(toJSON(wrapper)).toMatchSnapshot();
});
