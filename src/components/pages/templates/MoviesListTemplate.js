import React from "react";

const MoviesListTemplate = ({ movies }) => {
  return (
    <div>
      {movies.map(({ original_title, overview }) => (
        <div>
          <h1>{original_title}</h1>
          <p>{overview}</p>
        </div>
      ))}
    </div>
  );
};

export default MoviesListTemplate;
