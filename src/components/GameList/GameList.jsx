import React, { useState } from "react";
import GameCard from "../GameCard/GameCard";
import "./GameList.css";



function GameList(props) {
  const { games } = props;
  return (
    <div className="gameList">
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          genre={game.genre}
          picture={game.picture}
          id={game.id}
        />
      ))}
      {/* <GameCard title="My game" genre="Action" picture="" id="game_id" />
    <GameCard title="My game1" genre="Rpg" picture="" id="game_id" />
    <GameCard title="My game2" genre="Puzzle" picture="" id="game_id" /> */}
    </div>
  );
}

export default GameList;
