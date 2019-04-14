import { createBrowserHistory as createHistory } from "history";
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/Movies/MovieList";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Page } from "./pages/Page";

export const history = createHistory();

const App = () => (
  <Router history={history}>
    <div>
      <Route render={props => <Header {...props} />} />
      <Switch>
        <Route exact={true} path="/" render={() => <Redirect to="/movies" />} />
        <Page path="/movies" component={MovieList} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
