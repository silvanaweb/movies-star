import genresReducer from "../../../store/reducers/genres"
import { genres } from "../../fixtures/genres"

test('should set default state of genres', () => {
    const state = genresReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should set state of genres', () => {
    const action = {
        type: "SET_GENRES",
        genres
    }
    const state = genresReducer(undefined, action);
    expect(state).toEqual(genres);
});