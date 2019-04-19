import { genres } from "./fixtures/genres";

const api = {
	getGenres() {
		return new Promise((resolve, reject) => {
			resolve(genres);
		});
	},
};

export { api };
