import moviesSelector from "../../../store/selectors/movies";
import { movies } from "../../fixtures/movies";

test("should return all movies without filters", () => {
	const filters = {
		genres: [],
		rating: undefined,
	};
	const result = moviesSelector(movies, filters);
	expect(result).toEqual(movies);
});

test("should filter movies by genre", () => {
	const filters = {
		genres: ["Action", "Adventure"],
		rating: undefined,
	};
	const result = moviesSelector(movies, filters);
	expect(result).toEqual([movies[2]]);
});

test("should filter movies by rating", () => {
	const filters = {
		genres: [],
		rating: 8,
	};
	const result = moviesSelector(movies, filters);
	expect(result).toEqual([movies[0]]);
});
