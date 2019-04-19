import { orderBy } from "lodash";

const setGenres = genres => ({
	type: "SET_GENRES",
	genres,
});

const startSetGenres = api => {
	return dispatch => {
		// fetch movies from DB
		return api
			.getGenres()
			.then(genres => {
				// sort genres because they arrive unsorted
				const sortedGenres = orderBy(genres, ["name"], ["asc"]);
				return dispatch(setGenres(sortedGenres));
			})
			.catch(error => {
				throw new Error(error);
			});
	};
};

export { startSetGenres, setGenres };
