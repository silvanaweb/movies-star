import React from "react";
import { connect } from "react-redux";
import FilterByGenre from "../../components/Filters/FilterByGenre";
import FilterByRating from "../../components/Filters/FilterByRating";
import { MovieList } from "../../components/Movies/MovieList";
import selectMovies from "../../store/selectors/movies";
import "./MoviesPage.css";

const MoviesPage = ({ movieList, filters: { rating } }) => {
  console.log("movie LIST", movieList);
  return (
    <>
      <div className="content-container">
        <FilterByGenre />
        <div className="Movies__ratings">
          <FilterByRating className="Movies__ratings__filter" />{" "}
          <div className="Movies__ratings__content">
            The best movies rated from{" "}
            <span className="Movies__ratings__value">{rating}</span>
          </div>
        </div>
      </div>
      <div className="content-container">
        {!!movieList.length ? (
          <div>
            <p className="Movies__results">
              You have found {movieList.length} movies
            </p>
            <MovieList movies={movieList} />
          </div>
        ) : (
          <div className="Movies__list__empty">No movies available</div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    movieList: selectMovies(state.movies, state.filters),
    filters: state.filters
  };
};

export { MoviesPage };
export default connect(mapStateToProps)(MoviesPage);
