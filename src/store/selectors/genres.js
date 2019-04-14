const mkGenresTable = genres => {
  let genresObj;
  // returns the same object after loading it the first time
  // a Hast Table allows me to easily get the genres for the movies
  return () => {
    if (genresObj) {
      return genresObj;
    } else {
      genresObj = {};
      genres.forEach(({ name, id }) => {
        genresObj[id] = name;
      });
      return genresObj;
    }
  };
};

export default genres => mkGenresTable(genres)();
