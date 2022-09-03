import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { getSingleGame, parseGame } from "../../utils/api";
import { useParams } from 'react-router-dom';
import "./GameDetailsPage.css";
import GenreList from "../../components/GenreList/GenreList";

function GameDetailsPage(props) {
  const [game, setGame] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams()
  const id = params.id;

  useEffect(() => {
    console.log("get game data");
    getSingleGame(id).then((game) => {
      console.log(game);
      setGame(parseGame(game));
      console.log("saving", parseGame(game));
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <p>Game is loading</p>;
  }
  return (
    <div className="gameDetailsPage">
      <Header />
      <h1 className="gameTitle">{game.title}</h1>
      <div>
     <GenreList  genre={game.genre}/>
      </div>
      <p className="gameDesc">{game.description}</p>
      <div>
        {game.screenshots.map((picURL) => (
          <img className="screenshot" key={picURL} src={picURL} />
        ))}
      </div>
      <div className="gameCover">{game.cover}</div>
      
      <div className="gameURL">{game.url}</div>
    </div>
  );
}

export default GameDetailsPage;
