export const actionTypes = {
  fetchMovie: "MOVIE.FETCH",
  fetchMovieSuccess: "MOVIE.FETCH.SUCCESS",
  fetchMovieFailure: "MOVIE.FETCH.FAILURE",
  fetchMovies: "MOVIES.FETCH",
  fetchMoviesSuccess: "MOVIES.FETCH.SUCCESS",
  fetchMoviesFailure: "MOVIES.FETCH.FAILURE",
};

export const fetchMovie = (id) => ({
  type: actionTypes.fetchMovie,
  payload: {
    id,
  },
});

export const fetchMovieSuccess = (movie) => ({
  type: actionTypes.fetchMovieSuccess,
  payload: {
    movie,
  },
});

export const fetchMovieFailure = () => ({
  type: actionTypes.fetchMovieFailure,
});

export const fetchMovies = () => ({
  type: actionTypes.fetchMovies,
});

export const fetchMoviesSuccess = (movies) => ({
  type: actionTypes.fetchMoviesSuccess,
  payload: {
    movies,
  },
});

export const fetchMoviesFailure = () => ({
  type: actionTypes.fetchMoviesFailure,
});
