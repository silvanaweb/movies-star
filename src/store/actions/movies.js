// SET_MOVIES
const setMovies = movies => ({
	type: "SET_MOVIES",
	movies,
});

// genres are mapped in the genres list of the movie,
// this  facilitates the viewving of the genres
// (alternatively this mapping could be done before rendering, but because the list does not change, it makes sense doing it here)
const getListMovie = genresMap => ({ vote_average, title, genre_ids, poster_path, id }) => ({
	rating: vote_average,
	title,
	genres: genre_ids.map(gid => genresMap[gid]),
	poster_path,
	id,
});

const startSetMovies = (api, genres) => {
	return dispatch => {
		// fetch movies from DB
		return api
			.getMovies()
			.then(moviesRaw => {
				const genresMap = genres.reduce((acc, { id, name }) => ({ ...acc, [id]: name }), {});
				// sort the moives by popularity. this operation is performed here rather than in the selector
				// because it is supposed to be the default and only sorting operation
				// extract the required fields from the movie object (do not need to fill up the memory with unused info)
				const movies = moviesRaw
					.sort((a, b) => {
						return a.popularity < b.popularity ? 1 : -1;
					})
					.map(getListMovie(genresMap));
				dispatch(setMovies(movies));
			})
			.catch(error => {
				throw new Error(error);
			});
	};
};

export { setMovies, startSetMovies };
