import React from "react";
import { MOVIES_IMAGE_BASE_URL } from "../../consts/movieImage";
import { NavLink } from "react-router-dom";

const MovieDetailTemplate = ({ movie, isLoading, error }) => {
  const { original_title, overview, genres, backdrop_path } = movie;

  return (
    <>
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontSize: "8rem",
          }}
        >
          NOW LOADING...
        </div>
      )}

      {error && <div>ERROR LOADING MOVIE</div>}

      {movie && (
        <div>
          <NavLink
            style={{
              fontSize: "25px",
              textDecoration: "none",
              padding: "20px",
              color: "blue",
            }}
            to="/"
          >
            BACK
          </NavLink>
          <div
            style={{
              display: "flex",
              margin: "0 auto",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <h1 style={{ textAlign: "center" }}>{original_title}</h1>
            <p>{overview}</p>
            <img
              alt={original_title}
              src={`${MOVIES_IMAGE_BASE_URL}${backdrop_path}`}
            />
            {genres && (
              <ul>
                {genres.map(({ name, id }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailTemplate;
