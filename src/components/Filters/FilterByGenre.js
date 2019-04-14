import React from "react";
import { connect } from "react-redux";
import { setSelectedGenre } from "../../store/actions/filters";
import genresSelector from "../../store/selectors/genres";
import "./style.css";

const mkGenresState = genres => {
  let stateGenres = {};
  Object.values(genres).forEach(g => {
    stateGenres[g.id] = {
      ...g,
      selected: false
    };
  });
  return stateGenres;
};

class FilterByGenre extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGenres: mkGenresState(props.allgenres)
    };
  }

  render() {
    const { selectedGenres } = this.state;
    return (
      <header className="Header">
        <div className="content-container">
          <div className="Header__content">
            {Object.values(selectedGenres).map(genre => (
              <label key={genre.id}>
                {genre.name}
                <input
                  type="checkbox"
                  name={genre.id}
                  checked={selectedGenres[genre.id].selected}
                  onChange={this.onSelectedGenre}
                />
              </label>
            ))}
          </div>
        </div>
      </header>
    );
  }

  onSelectedGenre = e => {
    const checked = e.target.checked;
    const id = e.target.name;

    this.setState(
      prevState => {
        const { selectedGenres } = prevState;

        const selected = { ...selectedGenres[id], selected: checked };
        return { selectedGenres: { ...selectedGenres, [id]: selected } };
      },
      () => {
        const selectedGenresStr = Object.values(this.state.selectedGenres)
          .filter(g => g.selected)
          .map(({ name }) => name);
        // pass the genres to the filter sta    te
        if (selectedGenresStr) {
          this.props.setSelectedGenre(selectedGenresStr);
        }
      }
    );
  };
}

const mapStateToProps = (state, props) => {
  return {
    allgenres: genresSelector(state.genres)
  };
};
const mapDispatchToProps = dispatch => ({
  setSelectedGenre: genres => dispatch(setSelectedGenre(genres))
});
export { FilterByGenre };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterByGenre);
