import React from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

const Routes = () => (
  <>
    <Switch>
      <Route
        exact={true}
        path="/"
        render={props => (
          <>
            <Header {...props} />
            <MoviesPage />
            <Footer />
          </>
        )}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export { Routes };
