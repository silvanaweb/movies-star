export const movies = [
	{
		id: 2,
		title: "Forrest Gump",
		genres: ["Action"],
		rating: 8,
		poster_path: "image.jpg",
	},
	{
		id: 3,
		title: "Shrek",
		genres: ["Animation", "Adventure"],
		rating: 5,
		poster_path: "image.jpg",
	},
	{
		id: 1,
		title: "The Last Bender",
		genres: ["Action", "Adventure"],
		rating: 7,
		poster_path: "image.jpg",
	},
];

export const moviesRaw = [
	{
		id: 1,
		title: "The Last Bender",
		genre_ids: [2, 3],
		vote_average: 7,
		poster_path: "image.jpg",
		popularity: 10,
	},
	{
		id: 2,
		title: "Forrest Gump",
		genre_ids: [2],
		vote_average: 8,
		poster_path: "image.jpg",
		popularity: 100,
	},
	{
		id: 3,
		title: "Shrek",
		genre_ids: [1, 3],
		vote_average: 5,
		poster_path: "image.jpg",
		popularity: 60,
	},
];
