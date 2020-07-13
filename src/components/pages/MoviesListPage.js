import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux-modules/movies/actions";
import { getMovies } from "../../redux-modules/movies/selectors";

import MoviesListTemplate from "../templates/MoviesListTemplate";

const MoviesListPage = () => {
  const movies = useSelector(getMovies);

  const dispatch = useDispatch();

  // Fetch Movies when the page loads
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  // Pass the movies as a prop/argument
  return <MoviesListTemplate movies={movies} />;
};

export default MoviesListPage;
