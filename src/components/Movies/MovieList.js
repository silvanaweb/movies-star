import React from "react";
import "./MovieList.css";
import { MovieListItem } from "./MovieListItem";

const MovieList = ({ movies }) => {
  return (
    <div className="MovieList__list">
      {movies.map(({ title, genres, poster_path, id }) => (
        <MovieListItem
          key={`${title}${id}`}
          title={title}
          genres={genres.join(", ")}
          image={poster_path}
        />
      ))}
    </div>
  );
};

export { MovieList };
