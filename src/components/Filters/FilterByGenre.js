import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setSelectedGenre } from "../../store/actions/filters";
import { CheckButton } from "../CheckButton/CheckButton";
import Select from "react-select";
import "./Filters.css";

const mapToSelectValue = value => ({
	value: value,
	label: value,
});

const FilterByGenre = ({ allgenres, setSelectedGenreFilter }) => {
	const [selectedGenres, setSelectedGenres] = useState([]);
	const [winWidth, setWinWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWinWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const selectedGenresArr = Array.from(selectedGenres);
		// pass the genres to the filter state
		if (selectedGenresArr) {
			setSelectedGenreFilter(selectedGenresArr);
		}
	}, [selectedGenres]);

	const onSelectedGenre = ({ name, checked }) => {
		if (checked) {
			setSelectedGenres([...selectedGenres, name]);
		} else {
			setSelectedGenres(selectedGenres.filter(x => x !== name));
		}
		// after the state selectedGenres is updated,
		// the useEffect is called and there is where we call the action to set the filter  and then the filtered movies are updated
	};

	const onSelectedGenreMobile = selectedOptions => {
		setSelectedGenres(selectedOptions.map(o => o.name || o.value));
	};

	return (
		<div className="Filters__genre">
			<div className="content-container">
				{winWidth < 600 ? (
					<div className="Filters__genre__content__mobile">
						<Select
							name="filterGenres"
							placeholder="Filter by genres"
							value={selectedGenres.map(mapToSelectValue)}
							options={allgenres}
							onChange={onSelectedGenreMobile}
							isSearchable={false}
							isMulti
						/>
					</div>
				) : (
					<div className="Filters__genre__content">
						{allgenres.map((genre, idx) => (
							<div key={`genre.value${idx}`} className="Filters__genre__item">
								<CheckButton
									title={genre.name}
									name={genre.name}
									checked={selectedGenres.includes(genre.name)}
									onChange={onSelectedGenre}
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

// map the state to props to get the genres list
const mapStateToProps = (state, props) => {
	return {
		allgenres: state.genres.map(g => ({ name: g.name, label: g.name })),
	};
};
// map the actions to props so that they can be called inside the component
const mapDispatchToProps = dispatch => ({
	setSelectedGenreFilter: genres => dispatch(setSelectedGenre(genres)),
});

export { FilterByGenre };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterByGenre);
