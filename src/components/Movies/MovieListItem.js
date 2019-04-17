import React from "react";

const mkImagePath = name => {
  return `https://image.tmdb.org/t/p/w200/${name}`;
};

// this component rendere the single movie item
// the show state allows to render a simple animation (diffenrently from Angular, React does not offer a built-in animation library)
const MovieListItem = ({ genres, title, image, index }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 80 * index);
  }, []);

  return (
    <div className="MovieList__list__item" style={{ opacity: show ? 1 : 0 }}>
      <div>
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
