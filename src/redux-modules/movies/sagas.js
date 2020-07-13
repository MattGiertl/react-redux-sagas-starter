import { endpoints } from "../../api/endpoints";
import { put, takeEvery } from "redux-saga/effects";
import {
  actionTypes,
  fetchMoviesFailure,
  fetchMoviesSuccess,
  fetchMovieSuccess,
  fetchMovieFailure,
} from "../movies/actions";

export function* fetchMovies() {
  try {
    const { data } = yield endpoints.movies.getPopular();
    yield put(fetchMoviesSuccess(data.results));
  } catch (error) {
    yield put(fetchMoviesFailure());
  }
}

export function* fetchMovie(action) {
  try {
    const { id } = action.payload;
    const { data } = yield endpoints.movies.getMovie(id);

    yield put(fetchMovieSuccess(data));
  } catch (error) {
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
