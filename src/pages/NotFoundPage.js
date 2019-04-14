import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="content-container">
    Not found - <Link to="/">Go home</Link>
  </div>
);

export { NotFoundPage };
