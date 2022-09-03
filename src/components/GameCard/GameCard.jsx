import React, { useState } from "react";
import "./GameCard.css";
import { useNavigate } from "react-router-dom";
import GenreList from "../GenreList/GenreList";
import {
  addToMyGames,
  findGame,
  getMyGames,
  removeFromMyGames,
} from "../../utils/api";
import AddToLibraryButton from "../AddToLibraryButton/AddToLibraryButton";

function GameCard(props) {
  const { title, id, genre, picture } = props.game;
  const navTo = useNavigate();
  const myGames = getMyGames();
  const isInMyGamesOriginal = Boolean(findGame(myGames, props.game));
  const [isInMyGames, setIsInMyGames] = useState(isInMyGamesOriginal);
  
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
      <AddToLibraryButton game={props.game} onUpdate={props.onUpdate} />
    </div>
  );
}

export default GameCard;
