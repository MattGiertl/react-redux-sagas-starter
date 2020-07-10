import { actionTypes } from "./actions";

export const initialState = {
  movies: [],
  isLoading: false,
  error: false,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
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
