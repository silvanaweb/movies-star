import React from "react";
import { Route } from "react-router-dom";

const Page = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (
      <div>
        <div className="content-container">
          <Component {...props} />
        </div>
      </div>
    )}
  />
);

export { Page };
