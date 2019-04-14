const setSelectedGenre = genres => ({
  type: "SET_SELECTED_GENRE",
  genres
});
const setRating = rating => ({
  type: "SET_RATING",
  rating
});

export { setSelectedGenre, setRating };
