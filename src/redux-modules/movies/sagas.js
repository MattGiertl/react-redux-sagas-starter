import { endpoints } from "../../api/endpoints";
import { put, takeEvery } from "redux-saga/effects";
import {
  actionTypes,
  fetchMoviesFailure,
  fetchMoviesSuccess,
  fetchMovieSuccess,
  fetchMovieFailure,
} from "../movies/actions";

// Sagas are basically epics
// they are called when a specific action is dispatched
// e.g. the fetchMovies saga is called only when a fetchMovies action is dispatched (see watchFetchMovies generator on line 34)
export function* fetchMovies() {
  try {
    // In the try block you handle the happy path... fetch the data, handle notifications
    // and finally send a success action with the data as a payload to the reducer
    // the reducer takes the action in a switch case and updates the data from the payload
    const { data } = yield endpoints.movies.getPopular();
    yield put(fetchMoviesSuccess(data.results));
  } catch (error) {
    // Always send a failure action as well
    yield put(fetchMoviesFailure());
  }
}

export function* fetchMovie(action) {
  try {
    // an epic can also take action arguments
    // This is useful when your API call takes an argument, e.g. fetch a specific movie based on an ID
    const { id } = action.payload;
    const { data } = yield endpoints.movies.getMovie(id);

    // otherwise the workflow is the same.. fetch data, send a success action
    yield put(fetchMovieSuccess(data));
  } catch (error) {
    // or send a failure action in case something goes wrong
    yield put(fetchMovieFailure());
  }
}

export function* watchFetchMovies() {
  yield takeEvery(actionTypes.fetchMovies, fetchMovies);
}

export function* watchFetchMovie() {
  yield takeEvery(actionTypes.fetchMovie, fetchMovie);
}

export default [watchFetchMovies(), watchFetchMovie()];
