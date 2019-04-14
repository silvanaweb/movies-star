import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setGenre } from "../../store/actions/filters";
import selectMovies from "../../store/selectors/movies";
import "./style.css";

const MoviesList = ({ movies, setGenre, match: { params } }) => {
  useEffect(() => {
    const { genre } = params;
    setGenre(genre);
  }, [params]);
  console.log("movie lisr", movies);
  return (
    <>
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

const mapDispatchToProps = dispatch => ({
  setGenre: category => dispatch(setGenre(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);
