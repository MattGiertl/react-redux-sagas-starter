# React-redux-sagas-starter
A React template implementing Redux and Sagas, structured with Atomic Design.

## Principle & workflow
1. The page (screen) dispatches an action.
2. A saga listens for this specific action and does the following:
  * fetches the movie list.
  * dispatches a success action, which is a function that contains the movies in the payload.
3. The success action goes to the reducer, where it updates the state with the data in its payload.
4. Select the data from the reducer in a page component using selectors (env. objects / observed).

### Actions
Actions are functions that contain a type and an optional payload.
They are being dispatched on page (screen) load or upon a user interaction.

```
// Action definition
  export const fetchMovies = () => ({
    type: actionTypes.fetchMovies,
  });


  // Fetch Movies when the page loads
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
```

### Sagas - Epics
Sagas are used to handle side-effects of an interaction.
They are implemented as a try-catch block.
Things that are handled here include:
  * API actions are being performed here (get/post...)
  * Push notification dispatchment
 Always send a success action in the end, so the UI stops loading and updated the state with the data form the API.
 Handle errors in the catch block and send a failure action
 
 ```
 export function* fetchMovies() {
  try {
    const { data } = yield endpoints.movies.getPopular();
    yield put(fetchMoviesSuccess(data.results));
  } catch (error) {
    yield put(fetchMoviesFailure());
  }
}
 ```

### Reducers
Reducers are functions that take two arguments: an initial state and an action and returns an updated state.
It contains a switch case which updates the state depending on the action.

```
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
```

## Run the app
### Requirements
* NodeJS
* Yarn

```
cd react-redux-sagas-starter // go to project root
yarn // install packages
yarn start // run the app
```
The app will run on `localhost:3000`

## Terminology
* Page - Screen
* Selector - @EnvironmentObject / @ObservedObject
* Saga - Epic
