export const actionTypes = {
  fetchMovies: "MOVIES.FETCH",
  fetchMoviesSuccess: "MOVIES.FETCH.SUCCESS",
  fetchMoviesFailure: "MOVIES.FETCH.FAILURE",
};

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
