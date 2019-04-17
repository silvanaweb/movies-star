import { api } from "../../data/api";

const setGenres = genres => ({
  type: "SET_GENRES",
  genres
});

const startSetGenres = () => {
  return dispatch => {
    // fetch movies from DB
    return api
      .getGenres()
      .then(genres => {
        // sort genres because they arrive unsorted
        const sortedGenres = genres.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
        return dispatch(setGenres(sortedGenres));
      })
      .catch(error => {
        throw new Error(error);
      });
  };
};

export { startSetGenres, setGenres };
