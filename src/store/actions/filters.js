const setSelectedGenre = genres => ({
  type: "SET_SELECTED_GENRE",
  genres
});
const setSelectedRating = rating => ({
  type: "SET_SELECTED_RATING",
  rating
});

export { setSelectedGenre, setSelectedRating };
