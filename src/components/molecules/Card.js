import React from "react";
import { NavLink } from "react-router-dom";
import { MOVIES_IMAGE_BASE_URL } from "../../consts/movieImage";

const Card = ({ id, title, image, description }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "320px",
        minHeight: "360px",
        margin: "10px",
        border: "1px solid black",
      }}
    >
      <NavLink
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/movie-${id}`}
        key={id}
      >
        <img
          style={{ width: "100%" }}
          src={`${MOVIES_IMAGE_BASE_URL}${image}`}
          alt={title}
        />
        <div style={{ padding: "10px" }}>
          <h1 style={{ margin: 0 }}>{title}</h1>
          <p>{description}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
