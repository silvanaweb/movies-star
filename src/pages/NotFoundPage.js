import React from "react";
import { Link } from "react-router-dom";

const style = {
  margin: "3rem auto"
};

const NotFoundPage = () => (
  <div className="content-container">
    <div style={style}>
      Page Not Found - <Link to="/">Go home</Link>
    </div>
  </div>
);

export { NotFoundPage };
