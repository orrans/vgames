import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { getSingleGame, parseGame } from "../../utils/api";
import "./GameDetailsPage.css";


function GameDetailsPage(props) {
  const id=props.id;
  const [game, setGame] = useState()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    console.log('get game data');
    getSingleGame(id).then((game) => {
      console.log(game)
      setGame(parseGame(game));
      console.log('saving', parseGame(game))
      setLoading(false);
    });
  }, [id]);

if (loading) {
  return <p>Game is loading</p>
}
  return (
    <div className="gameDetailsPage">
      <Header />
      <h1 className="gameTitle">{game.title}</h1>
      <p className="gameDesc">{game.description}</p>
      <div>
        {game.screenshots.map((picURL)=> (
          <img className="screenshot" key={picURL} src={picURL}/>          
        ))}</div>
      <div className="gameCover">{game.cover}</div>
      <div>
        {game.genre.map((genre)=> (
          <React.Fragment key={genre}>
            <div className="genre badge text-bg-primary">{genre}</div>
            {' '}
          </React.Fragment>
        ))}</div>
    </div>
  );
}

export default GameDetailsPage;
