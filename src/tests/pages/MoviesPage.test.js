import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { MoviesPage } from "../../pages/MoviesPage/MoviesPage";
import { movies } from "../fixtures/movies";

test("should render NotFoundPage correctly with empty list", () => {
	const wrapper = shallow(<MoviesPage movieList={[]} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should handle onGoToHome correctly with movies list", () => {
	const wrapper = shallow(<MoviesPage movieList={movies} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
});
