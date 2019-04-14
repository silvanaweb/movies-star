const genresReducerDefaultState = [];

export default (state = genresReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.genres;
    default:
      return state;
  }
};
