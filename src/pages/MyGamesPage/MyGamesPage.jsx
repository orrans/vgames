import React, { useEffect, useState } from "react";
import GameList from "../../components/GameList/GameList";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import { getMyGames } from "../../utils/api";
import "./MyGamesPage.css";

const tmpGamesArr = [
  
];

function MyGamesPage() {
 const [gamesList, setGamesList] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  function refreshGames() {
    console.log('get games list');
    const games = getMyGames()
    console.log(games)
    setGamesList(games);
    console.log('saving', games)
    setLoading(false);
  }

  useEffect(refreshGames, [search]);

  return <div className="homePage">
    <Header/>
    <Search onChange={(event)=>setSearch(event.target.value)}/>
    <h1>Browse</h1>
    <GameList games={gamesList} onUpdate={() => {
      refreshGames();
    }} />
  </div>;
}

export default MyGamesPage;
