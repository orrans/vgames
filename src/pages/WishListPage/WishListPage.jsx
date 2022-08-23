import React, { useState } from "react";
import GameList from "../../components/GameList/GameList";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import "./WishListPage.css";

const tmpGamesArr = [
  { title: "wish game", genre: "Action", picture: "", id: "game_id12" },
  { title: "wish game1", genre: "Rpg", picture: "", id: "game_id34" },
  { title: "wish game2", genre: "Puzzle", picture: "", id: "game_id56" },
];

function WishListPage() {
  return (
    <div className="wishListPage">
      <Header />
      <Search />
      <h1>Wish List</h1>
      <GameList games={tmpGamesArr} />
    </div>
  );
}

export default WishListPage;
