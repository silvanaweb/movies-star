const mkGenresTable = genres => {
  let defaultGenres;
  // returns the same object after loading it the first time
  // a Hast Table allows me to easily get the genres for the movies
  return () => {
    if (defaultGenres) {
      return defaultGenres;
    } else {
      defaultGenres = {};
      genres.forEach(({ name, id }) => {
        defaultGenres[id] = {
          name,
          id
        };
      });
      return defaultGenres;
    }
  };
};

export default genres => mkGenresTable(genres)();
