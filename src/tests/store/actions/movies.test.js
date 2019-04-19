import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { setMovies, startSetMovies, formatMovies } from "../../../store/actions/movies";
import { moviesRaw, movies } from "../../fixtures/movies";
import { genres } from "../../fixtures/genres";
const createMockStore = configureMockStore([thunk]);
import { orderBy } from "lodash";
import { api } from "../../mockdb";

test("should generate set movies correctly", () => {
	const action = setMovies(movies);
	expect(action).toEqual({
		type: "SET_MOVIES",
		movies,
	});
});

test("should fetch the movies from database", done => {
	const store = createMockStore();
	store.dispatch(startSetMovies(api, genres)).then(() => {
		const actions = store.getActions();
		const resMovies = formatMovies(moviesRaw, genres);
		expect(actions[0]).toEqual({
			type: "SET_MOVIES",
			movies: resMovies,
		});
		done();
	});
});
