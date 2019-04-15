import React from "react";

const mkImagePath = name => {
  return `https://image.tmdb.org/t/p/w200/${name}`;
};

const MovieListItem = ({ genres, title, image }) => (
  <div className="MovieList__list__item">
    <div>
      <img src={mkImagePath(image)} alt={title} />
    </div>
    <div className="MovieList__list__item__content">
      <h3>{title}</h3>
      <p>{genres}</p>
    </div>
  </div>
);

export { MovieListItem };
