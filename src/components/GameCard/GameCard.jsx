import React, { useState } from "react";
import "./GameCard.css";
import { useNavigate } from "react-router-dom";
import GenreList from "../GenreList/GenreList";
import {
  addToWishList,
  findGame,
  getWishList,
  removeFromWishList,
} from "../../utils/api";

function GameCard(props) {
  const { title, id, genre, picture } = props.game;
  const navTo = useNavigate();
  const wishList = getWishList();
  const isInWishListOriginal = Boolean(findGame(wishList, props.game));
  const [isInWishList, setIsInWishList] = useState(isInWishListOriginal);
  
  return (
    <div
      className="gameCard"
      onClick={() => {
        navTo("/game/" + id);
      }}
    >
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
        <GenreList genre={genre} />
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          
          if (isInWishList) {
            setIsInWishList(false);
            removeFromWishList(props.game);
          } else {
            setIsInWishList(true);
            addToWishList(props.game);
          }

          props.onUpdate?.()
        }}
      >
        {`${isInWishList ? "Remove from" : "Add to"} Wishlist`}
      </button>
    </div>
  );
}

export default GameCard;
