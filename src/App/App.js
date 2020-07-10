import React from "react";
import MoviesListPage from "../components/pages/MoviesListPage";
import { Provider } from "react-redux";
import store from "../redux-config/store";

function App() {
  return (
    <Provider store={store().store}>
      <MoviesListPage />
    </Provider>
  );
}

export default App;
