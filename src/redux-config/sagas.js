import { all } from "redux-saga/effects";
import moviesSagas from "../redux-modules/movies/sagas";

export default function* root() {
  yield all([...moviesSagas]);
}
