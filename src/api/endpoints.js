import { call } from "redux-saga/effects";
import { api } from "./";

const apiKey = "b42de0d7051793f886f6c0569505a420";

const endpointNames = {
  movies: {
    getPopular: (apiKey) =>
      `/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`,
    getMovie: (id, apiKey) => `/movie/${id}?api_key=${apiKey}`,
  },
};

export const endpoints = {
  movies: {
    getPopular: () => call(api(), endpointNames.movies.getPopular(apiKey)),
    getMovie: (id) => call(api(), endpointNames.movies.getMovie(id, apiKey)),
  },
};
