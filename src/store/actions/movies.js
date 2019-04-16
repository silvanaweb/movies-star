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
  genres: genre_ids.map(gid => genresMap[gid]),
  poster_path,
  id
});

const startSetMovies = genres => {
  return dispatch => {
    // fetch movies from DB
    return fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6650ee2bc2c3ba2b9ee553da9ff64530"
    )
      .then(res => res.json())
      .then(data => {
        const { results } = data;
        const genresMap = genres.reduce((acc, { id, name }) => ({ ...acc, [id]: name }), {});
        // extract the needed fields from the movie object and sort by popularity
        const movies = results
          .map(getListMovie(genresMap))
          .sort((a, b) => {
            return a.popularity < b.popularity ? 1 : -1;
          });
        dispatch(setMovies(movies));
      });
  };
};

export { setMovies, startSetMovies };
