// Filters Reducer

const filtersReducerDefaultState = {
  rating: "",
  genre: []
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_SELECTED_GENRE":
      return {
        ...state,
        genre: action.genre
      };
    case "SET_RATING":
      return {
        ...state,
        rating: action.rating
      };
    default:
      return state;
  }
};
