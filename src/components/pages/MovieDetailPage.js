import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchMovie } from "../../redux-modules/movies/actions";
import {
  getMovie,
  getAreMoviesLoading,
  getMoviesError,
} from "../../redux-modules/movies/selectors";

import MovieDetailTemplate from "../templates/MovieDetailTemplate";

const MovieDetailPage = () => {
  // dispatch is used to.. well, dispatch an action... not sure how to handle this in SwiftUI
  const dispatch = useDispatch();

  // In React, we usually use selectors to fetch specific data from the reducer
  // this is equivalent to @EnvironmentObject or @ObservedObject
  const movie = useSelector(getMovie);
  const isLoading = useSelector(getAreMoviesLoading);
  const error = useSelector(getMoviesError);

  const { id } = useParams();

  // Fetch Movies when the page loads
  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  // Pass the data into the template as usual
  return (
    <MovieDetailTemplate movie={movie} isLoading={isLoading} error={error} />
  );
};

export default MovieDetailPage;
