import React from "react";
import "./MovieList.css";
import { MovieListItem } from "./MovieListItem";

const MovieList = ({ movies }) => (
  <div className="MovieList__list">
    {movies.map(({ title, genres, poster_path, id }, idx) => (
      <MovieListItem
        key={`${title}${id}`}
        title={title}
        genres={genres.join(", ")}
        image={poster_path}
        index={idx}
      />
    ))}
  </div>
);

export { MovieList };
