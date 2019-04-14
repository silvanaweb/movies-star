const setGenre = genre => ({
  type: "SET_GENRE",
  genre
});
const setRating = text => ({
  type: "SET_RATING",
  rating
});

export { setGenre, setRating };
