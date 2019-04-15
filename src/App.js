import { createBrowserHistory as createHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import "./App.css";
import { Routes } from "./routes";

export const history = createHistory();

const App = () => (
  <Router history={history}>
    <div>
      <Routes />
    </div>
  </Router>
);

export default App;
