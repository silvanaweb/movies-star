import { api } from "../../data/api";

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
    return api.getMovies().then(moviesRaw => {
      const genresMap = genres.reduce(
        (acc, { id, name }) => ({ ...acc, [id]: name }),
        {}
      );
      // extract the needed fields from the movie object and sort by popularity
      const movies = moviesRaw.map(getListMovie(genresMap)).sort((a, b) => {
        return a.popularity < b.popularity ? 1 : -1;
      });
      dispatch(setMovies(movies));
    });
  };
};

export { setMovies, startSetMovies };
