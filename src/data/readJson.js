const axios = require("axios");
const fs = require("fs");

// axios
// 	.get("https://api.themoviedb.org/3/genre/movie/list?api_key=6650ee2bc2c3ba2b9ee553da9ff64530")
// 	.then(function(response) {
// 		const data = response.data;
// 		const { genres } = data;
// 		console.log(genres);
// 		let genresToFile = JSON.stringify(genres);
// 		fs.writeFileSync("genres.json", genresToFile);
// 	})
// 	.catch(function(error) {
// 		console.log(error);
// 	});
axios
	.get("https://api.themoviedb.org/3/movie/now_playing?api_key=6650ee2bc2c3ba2b9ee553da9ff64530")
	.then(function(response) {
		const data = response.data.results;
		console.log(data.length);
		// const { genres } = data;
		// let ToFile = JSON.stringify(data);
		// fs.writeFileSync("movies.json", ToFile);
	})
	.catch(function(error) {
		console.log(error);
	});
