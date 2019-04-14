import React from "react";
import { connect } from "react-redux";
import selectMovies from "../../store/selectors/movies";
import FilterByGenre from "../Filters/FilterByGenre";
import FilterByRating from "../Filters/FilterByRating";
import "./MovieList.css";

const MovieList = ({ movies, filters: { rating } }) => {
  console.log("movie LIST", movies);
  return (
    <>
      <div>
        <FilterByGenre />
        <div className="MovieList__ratings">
          <FilterByRating className="MovieList__ratings__filter" />{" "}
          <div className="MovieList__ratings__content">
            The best movies rated from{" "}
            <span className="MovieList__ratings__value">{rating}</span>
          </div>
        </div>
      </div>
      {!!movies.length ? (
        <div className="MovieList__list">
          {movies.map(({ title, genres }, idx) => (
            <div key={`${title}${idx}`} className="MovieList__list__item">
              <div>{title}</div>
              <div>{genres.join(", ")}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="MovieList__list__empty">No movies available</div>
      )}
    </>
  );
};

export { MovieList };

const mapStateToProps = (state, props) => {
  return {
    movies: selectMovies(state.movies, state.filters),
    filters: state.filters
  };
};

export default connect(mapStateToProps)(MovieList);
