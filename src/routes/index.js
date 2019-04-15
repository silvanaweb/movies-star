import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header/Header";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import { NotFoundPage } from "../pages/NotFoundPage";

const Routes = () => (
  <>
    <Route render={props => <Header {...props} />} />
    <Switch>
      <Route exact={true} path="/" render={() => <Redirect to="/movies" />} />
      <Route path="/movies" component={MoviesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export { Routes };
