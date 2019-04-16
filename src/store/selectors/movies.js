export default (movies, { genres, rating }) => {
  let filteredMovies = movies;

  if (!!rating) {
    filteredMovies = filteredMovies.filter(
      movie => movie.vote_average >= rating
    );
  }

  if (!!genres.length) {
    filteredMovies = filteredMovies.filter(movie =>
      genres.every(g => movie.genres.includes(g))
    );
  }

  return filteredMovies;
};
