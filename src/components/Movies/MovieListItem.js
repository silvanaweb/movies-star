import React from "react";

const mkImagePath = name => {
	return `https://image.tmdb.org/t/p/w200/${name}`;
};

// this component renders the single movie item
// the show state allows to render a simple animation
const MovieListItem = ({ genres, image, index, title }) => {
	const [show, setShow] = React.useState(false);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setShow(true);
		}, 60 * index);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className="MovieList__list__item" style={{ opacity: show ? 1 : 0 }}>
			<div className="MovieList__list__item__image">
				<img src={mkImagePath(image)} alt={title} />
			</div>
			<div className="MovieList__list__item__content">
				<h3>{title}</h3>
				<p>{genres}</p>
			</div>
		</div>
	);
};

export { MovieListItem };
