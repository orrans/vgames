import React, { useState } from "react";
import "./HomePage.css";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import GameList from "../../components/GameList/GameList";

const tmpGamesArr = [
  { title: "My game", genre: "Action", picture: "", id: "game_id12" },
  { title: "My game1", genre: "Rpg", picture: "", id: "game_id34" },
  { title: "My game2", genre: "Puzzle", picture: "", id: "game_id56" },
];

function HomePage() {
  return <div className="homePage">
    <Header/>
    <Search/>
    <h1>Browse</h1>
    <GameList games={tmpGamesArr} />
  </div>;
}

export default HomePage;
