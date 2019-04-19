import { genres } from "./fixtures/genres";
import { moviesRaw } from "./fixtures/movies";

const api = {
	getGenres() {
		return new Promise((resolve, reject) => {
			resolve(genres);
		});
	},
	getMovies() {
		return new Promise((resolve, reject) => {
			resolve(moviesRaw);
		});
	},
};

export { api };
