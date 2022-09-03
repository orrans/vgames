import React, { useState } from "react";
import GameList from "../../components/GameList/GameList";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import "./WishListPage.css";

const tmpGamesArr = [
  
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
