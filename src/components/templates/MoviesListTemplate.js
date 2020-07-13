import React from "react";
import Card from "../molecules/Card";

const MoviesListTemplate = ({ movies }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Popular movies</h1>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {movies.map(({ id, original_title, overview, backdrop_path }) => (
          <Card
            id={id}
            key={id}
            title={original_title}
            description={overview}
            image={backdrop_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesListTemplate;
