import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { Loader } from "./components/Loader/Loader";
import { api } from "./data/api";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import * as serviceWorker from "./serviceWorker";
import { startSetGenres } from "./store/actions/genres";
import { startSetMovies } from "./store/actions/movies";
import configureStore from "./store/configureStore";

// setup the connection parameters
api.config();

// insiantiate the store
const store = configureStore();

// provide the store to the app
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

// rendere a loader while the data is loaded
ReactDOM.render(<Loader />, document.getElementById("root"));

store
  .dispatch(startSetGenres())
  .then(action => {
    // first load the genres, we use the genre when we format the movie object
    return store.dispatch(startSetMovies(action.genres));
  })
  .then(() => {
    // if everything goes well, start the app
    ReactDOM.render(jsx, document.getElementById("root"));
  })
  .catch(error => {
    // if an error occur, then rendere an error page
    ReactDOM.render(
      <ErrorPage errorMessage="Something went wrong, please try again later" />,
      document.getElementById("root")
    );
    console.error("[Loading Movies and Genres]", error);
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
