import React from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";

const Routes = () => (
  <>
    <Switch>
      {/* all the pages are eventually loaded at this point */}
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
      {/* MUST SEEN: a COOL not found page shows up when not path is matched */}
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export { Routes };
