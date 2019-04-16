import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { FilterByRating } from "../../components/Filters/FilterByRating";

let wrapper, setSelectedRating, rating;

beforeEach(() => {
  setSelectedRating = jest.fn();
  rating = 3;
  wrapper = shallow(
    <FilterByRating setSelectedRating={setSelectedRating} rating={rating} />
  );
});

test("should render FilterByRating correctly", () => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});
