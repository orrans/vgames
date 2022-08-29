import React, { useState } from "react";
import "./GameCard.css";

function GameCard(props) {
  const { title, id, genre, picture } = props;

  return (
    <div className="gameCard">
      <img
        src={
          picture
            ? picture
            : "https://placeholder.photo/img/90x90?text=game&bg_color=999999"
        }
        className="gamePic"
      />
      <div className="title">{title}</div>
      <div>
        {genre.map((genre)=> (
          <React.Fragment>
          <div className="genre badge text-bg-primary">{genre}</div>
          {' '}
          </React.Fragment>
        ))}</div>
      <button>Add to Wishlist</button>
    </div>
  );
}

export default GameCard;
