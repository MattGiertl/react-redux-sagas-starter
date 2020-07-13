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
  const dispatch = useDispatch();

  const movie = useSelector(getMovie);
  const isLoading = useSelector(getAreMoviesLoading);
  const error = useSelector(getMoviesError);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  return (
    <MovieDetailTemplate movie={movie} isLoading={isLoading} error={error} />
  );
};

export default MovieDetailPage;
