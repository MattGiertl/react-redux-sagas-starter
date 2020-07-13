import { actionTypes } from "./actions";

export const initialState = {
  movie: {},
  movies: [],
  isLoading: false,
  error: false,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.fetchMovie:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.fetchMovieSuccess:
      // const { movie } = action.payload;
      return {
        ...state,
        isLoading: false,
        movie: action.payload.movie,
      };

    case actionTypes.fetchMovieFailure:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case actionTypes.fetchMovies:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.fetchMoviesSuccess:
      const { movies } = action.payload;
      return {
        ...state,
        isLoading: false,
        movies,
      };

    case actionTypes.fetchMoviesFailure:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default moviesReducer;
