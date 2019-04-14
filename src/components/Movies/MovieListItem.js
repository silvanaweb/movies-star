import React from "react";
import { Link } from "react-router-dom";

const MovieListItem = ({ newItem, title }) => (
  <div>
    <h3>
      <Link to={`/movie/${encodeURIComponent(title)}`} className="Movie__link">
        {title} {newItem && <span className="Movie__new">- New</span>}
      </Link>
    </h3>
  </div>
);

export { MovieListItem };
