import { endpoints } from "../../api/endpoints";
import { put, takeEvery } from "redux-saga/effects";
import {
  actionTypes,
  fetchMoviesFailure,
  fetchMoviesSuccess,
} from "../movies/actions";

export function* fetchMovies() {
  try {
    const { data } = yield endpoints.movies.getPopular();
    yield put(fetchMoviesSuccess(data.results));
  } catch (error) {
    yield put(fetchMoviesFailure());
    console.log("error", error);
  }
}

export function* watchFetchMovies() {
  yield takeEvery(actionTypes.fetchMovies, fetchMovies);
}

export default [watchFetchMovies()];
