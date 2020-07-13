import { actionTypes } from "./actions";

// Define a state object
export const initialState = {
  // movie detail
  movie: {},
  // movie list
  movies: [],
  // isLoading and errors are included as well
  isLoading: false,
  // this can either be a string or a boolean.. depends on your error message handling
  error: false,
};

// Create the actual reduces, which is a function that takes the above initialState
// and an action
// the reducer updates the state based on the action that was sent
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

    // a reducer always has to return state as a default
    default:
      return state;
  }
};

export default moviesReducer;
