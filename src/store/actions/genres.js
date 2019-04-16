const setGenres = genres => ({
  type: "SET_GENRES",
  genres
});

const startSetGenres = () => {
  return dispatch => {
    // fetch movies from DB
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=6650ee2bc2c3ba2b9ee553da9ff64530"
    )
      .then(res => res.json())
      .then(result => {
        const { genres } = result;
        // genres come unsorted
        const sortedGenres = genres.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
        return dispatch(setGenres(sortedGenres));
      });
  };
};

export { startSetGenres, setGenres };
