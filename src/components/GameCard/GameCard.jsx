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
            : "https://placeholder.photo/img/200x300?text=game&bg_color=999999"
        }
        className="gamePic"
      />
      <div className="title">{title}</div>
      <div>
        <div className="genre badge text-bg-primary">{genre}</div>
      </div>
      <button>Add to Wishlist</button>
    </div>
  );
}

export default GameCard;
