import { setGenres } from "../../../store/actions/genres";
import { genres } from "../../fixtures/genres";

test("should generate set s genres correctly", () => {
  const action = setGenres(genres);
  expect(action).toEqual({
    type: "SET_GENRES",
    genres: genres
  });
});


