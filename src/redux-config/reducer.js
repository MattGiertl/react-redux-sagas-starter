import movies, {
  initialState as moviesState,
} from "../redux-modules/movies/reducer";
import { combineReducers } from "redux";

export const createRootReducer = () =>
  combineReducers({
    movies,
  });

export const initialStoreState = {
  movies: moviesState,
};
