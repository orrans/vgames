import React, { useState } from "react";
import "./GenreList.css";

function GenreList(props) {
  return <div className="genreList">
       {props.genre.map((genre) => (
          <React.Fragment key={genre}>
            <div className="genre badge text-bg-primary">{genre}</div>{" "}
          </React.Fragment>
        ))}
  </div>;
}

export default GenreList;
