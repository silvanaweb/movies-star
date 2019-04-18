import filtersReducer from "../../../store/reducers/filters"

test("should setup default filter ", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        rating: 3,
        genres: []
    });
});

test("should set selected genres", () => {
    const genres = ["Action", "Horror"]
    const action = {
        type: "SET_SELECTED_GENRE",
        genres
    }
    const state = filtersReducer(undefined, action);
    expect(state.genres).toEqual(genres);
});


test("should set selected rating", () => {
    const rating = 7
    const action = {
        type: "SET_SELECTED_RATING",
        rating
    }
    const state = filtersReducer(undefined, action);
    expect(state.rating).toEqual(rating);
});


