import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import filtersReducer from "./reducers/filters";
import genresReducer from "./reducers/genres";
import moviesReducer from "./reducers/movies";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      filters: filtersReducer,
      genres: genresReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
