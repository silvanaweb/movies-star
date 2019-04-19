import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { setGenres, startSetGenres } from "../../../store/actions/genres";
import { genres } from "../../fixtures/genres";
const createMockStore = configureMockStore([thunk]);
import { orderBy } from "lodash";
import { api } from "../../mockdb";

test("should generate set genres correctly", () => {
	const action = setGenres(genres);
	expect(action).toEqual({
		type: "SET_GENRES",
		genres: genres,
	});
});

test("should fetch the genres from database", done => {
	const store = createMockStore();
	store.dispatch(startSetGenres(api)).then(() => {
		const actions = store.getActions();
		const resGenres = orderBy(genres, ["name"], ["asc"]);
		expect(actions[0]).toEqual({
			type: "SET_GENRES",
			genres: resGenres,
		});
		done();
	});
});
