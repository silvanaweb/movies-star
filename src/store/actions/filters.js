const setSelectedGenre = genre => ({
  type: "SET_SELECTED_GENRE",
  genre
});
const setRating = rating => ({
  type: "SET_RATING",
  rating
});

export { setSelectedGenre, setRating };
