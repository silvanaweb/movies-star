import moviesReducer from "../../../store/reducers/movies"
import movies from "../../fixtures/movies"

test('should set default state of movies', () => {
    const state = moviesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should set state of movies', () => {
    const action = {
        type: "SET_MOVIES",
        movies
    }
    const state = moviesReducer(undefined, action);
    expect(state).toEqual(movies);
});