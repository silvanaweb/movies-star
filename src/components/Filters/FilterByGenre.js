import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setSelectedGenre } from "../../store/actions/filters";
import { CheckButton } from "../CheckButton/CheckButton";
import "./Filters.css";

// in order to filter by genre, a state hook is used and a Set
// a Set has the property to not have duplicates and to easily add and remove items
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
    // a new Set must be created so that selectedGenres is actually updated
    setSelectedGenres(new Set(selectedGenres));
    // after the state selectedGenres is updated,
    // the useEffect is called and there is where we call the action to set the filter  and then the filtered movies are updated
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

// map the state to props to get the genres list
const mapStateToProps = (state, props) => {
  return {
    allgenres: state.genres
  };
};
// map the actions to props so that they can be called inside the component
const mapDispatchToProps = dispatch => ({
  setSelectedGenreFilter: genres => dispatch(setSelectedGenre(genres))
});

export { FilterByGenre };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterByGenre);
