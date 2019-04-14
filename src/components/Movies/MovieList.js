import React from "react";
import { connect } from "react-redux";
import selectMovies from "../../store/selectors/movies";
import FilterByGenre from "../Filters/FilterByGenre";
import "./style.css";

const MoviesList = ({ movies }) => {
  console.log("movie LIST", movies);
  return (
    <>
      <div>
        <FilterByGenre />
      </div>
      <div>
        movies list
        {/* {movies.map(({ new: newItem, title }, idx) => (
          <MovieListItem key={idx} newItem={newItem} title={title} />
        ))} */}
      </div>
    </>
  );
};

export { MoviesList };

const mapStateToProps = (state, props) => {
  return {
    movies: selectMovies(state.movies, state.filters)
  };
};

export default connect(mapStateToProps)(MoviesList);
