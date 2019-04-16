import {
  setSelectedGenre,
  setSelectedRating
} from "../../../store/actions/filters";
import { genresFilters } from "../../fixtures/genres";

test("should generate set selected genres correctly", () => {
  const action = setSelectedGenre(genresFilters);
  expect(action).toEqual({
    type: "SET_SELECTED_GENRE",
    genres: genresFilters
  });
});
test("should generate set selected rating correctly", () => {
  const rating = 4;
  const action = setSelectedRating(rating);
  expect(action).toEqual({
    type: "SET_SELECTED_RATING",
    rating: rating
  });
});
