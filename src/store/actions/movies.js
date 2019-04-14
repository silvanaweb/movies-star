// SET_MOVIES
const setMovies = movies => ({
  type: "SET_MOVIES",
  movies
});

const startSetMovies = () => {
  return dispatch => {
    // fetch movies from DB
    return fetch("https://my-json-server.typicode.com/spokeldn/react-test/db")
      .then(res => res.json())
      .then(result => {
        const { movies } = result;
        dispatch(setMovies(movies));
      });
  };
};

export { setMovies, startSetMovies };
