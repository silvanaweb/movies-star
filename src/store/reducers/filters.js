// Filters Reducer

const filtersReducerDefaultState = {
  rating: 3,
  genres: []
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_SELECTED_GENRE":
      return {
        ...state,
        genres: action.genres
      };
    case "SET_SELECTED_RATING":
      return {
        ...state,
        rating: action.rating
      };
    default:
      return state;
  }
};
