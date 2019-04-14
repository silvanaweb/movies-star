// SET_MOVIES
const setMovies = movies => ({
  type: "SET_MOVIES",
  movies
});

const getListMovie = genresMap => ({
  popularity,
  vote_average,
  title,
  genre_ids,
  poster_path,
  id
}) => ({
  popularity,
  vote_average,
  title,
  genres: genre_ids.map(gid => genresMap[gid].name),
  poster_path,
  id
});

const startSetMovies = genresMap => {
  return dispatch => {
    // fetch movies from DB
    return fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6650ee2bc2c3ba2b9ee553da9ff64530"
    )
      .then(res => res.json())
      .then(data => {
        const { results } = data;
        const movies = results.map(getListMovie(genresMap));
        dispatch(setMovies(movies));
      });
  };
};

export { setMovies, startSetMovies };
