export default (movies, { genre, rating }) => {
  let filteredMovies = movies;
  // if (category) {
  //   filteredMovies = filteredMovies.filter(
  //     movie => movie.category.toLowerCase() === category
  //   );
  // }
  // if (text) {
  //   filteredMovies = filteredMovies.filter(movie =>
  //     movie.title.toLowerCase().includes(text.toLowerCase())
  //   );
  // }
  // filter by genre
  if (!!genre.length) {
    filteredMovies = filteredMovies.filter(movie =>
      genre.every(g => movie.genres.includes(g))
    );
  }

  // Sort by popularity
  return filteredMovies.sort((a, b) => {
    return a.popularity < b.popularity ? 1 : -1;
  });
};
