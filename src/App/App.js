import React from "react";
import store from "../redux-config/store";

import { Provider } from "react-redux";

import Routes from "./Routes";

// App is the main function of the project
// Think of it as our ContentView()
function App() {
  return (
    // <Provider /> is used to inject Redux into the App
    <Provider store={store().store}>
      {/* 
        All the Routes are also rendered here and a screen is displayed based on your URL 
        See the <Routes /> component for the implementation
      */}
      <Routes />
    </Provider>
  );
}

export default App;
