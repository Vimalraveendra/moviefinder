import React from "react";

const MovieDisplay = ({ title, poster, year }) => {
  return (
    <React.Fragment>
      <div>
        <div>
          <img src={poster} alt="" height="400px" />
        </div>
        <h1 style={{ fontSize: "1.5em" }}>{title}</h1>
        <h2 style={{ fontSize: "1.25em" }}>{year}</h2>
      </div>
    </React.Fragment>
  );
};

export default MovieDisplay;
