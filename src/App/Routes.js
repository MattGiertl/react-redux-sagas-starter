import React from "react";

import { Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import MoviesListPage from "../components/pages/MoviesListPage";
import MovieDetailPage from "../components/pages/MovieDetailPage";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={MoviesListPage} />
      <Route exact path="/movie-:id" component={MovieDetailPage} />
    </Router>
  );
};

export default Routes;
