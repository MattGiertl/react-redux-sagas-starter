import React from "react";
import store from "../redux-config/store";

import { Provider } from "react-redux";

import Routes from "./Routes";

function App() {
  return (
    <Provider store={store().store}>
      <Routes />
    </Provider>
  );
}

export default App;
