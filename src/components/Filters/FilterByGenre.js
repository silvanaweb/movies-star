import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setSelectedGenre } from "../../store/actions/filters";
import { CheckButton } from "../CheckButton/CheckButton";
import "./Filters.css";

const FilterByGenre = ({ allgenres, setSelectedGenreFilter }) => {
  const [selectedGenres, setSelectedGenres] = useState(new Set());

  useEffect(() => {
    const selectedGenresArr = Array.from(selectedGenres);
    // pass the genres to the filter state
    if (selectedGenresArr) {
      setSelectedGenreFilter(selectedGenresArr);
    }
  }, [selectedGenres]);

  const onSelectedGenre = ({ name, checked }) => {
    if (checked) {
      selectedGenres.add(name);
    } else {
      selectedGenres.delete(name);
    }
    setSelectedGenres(new Set(selectedGenres));
  };

  return (
    <div className="Filters__genre">
      <div className="content-container">
        <div className="Filters__genre__content">
          {allgenres.map(genre => (
            <div key={genre.id} className="Filters__genre__item">
              <CheckButton
                title={genre.name}
                name={genre.name}
                checked={selectedGenres.has(genre.name)}
                onChange={onSelectedGenre}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    allgenres: state.genres
  };
};
const mapDispatchToProps = dispatch => ({
  setSelectedGenreFilter: genres => dispatch(setSelectedGenre(genres))
});

export { FilterByGenre };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterByGenre);
