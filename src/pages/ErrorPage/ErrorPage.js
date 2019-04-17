import React from "react";
import "./ErrorPage.css";

const ErrorPage = ({ errorMessage }) => (
  <div className="ErrorPage">
    <h1>{errorMessage}</h1>
  </div>
);

export { ErrorPage };
