import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import {
  findGame,
  getMyGames,
  getSingleGame,
  parseGame,
  updateMyGames,
} from "../../utils/api";
import { useParams } from "react-router-dom";
import "./GameDetailsPage.css";
import GenreList from "../../components/GenreList/GenreList";
import AddToLibraryButton from "../../components/AddToLibraryButton/AddToLibraryButton";

function GameDetailsPage(props) {
  const [game, setGame] = useState();
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState("");
  const params = useParams();
  const id = params.id;
  const myGames = getMyGames();
  const [isInMyGames, setIsInMyGames] = useState(false);

  useEffect(() => {
    console.log("get game data");
    getSingleGame(id).then((game) => {
      console.log(game);
      setGame(parseGame(game));
      console.log("saving", parseGame(game));
      setLoading(false);
      const wishListGame = findGame(myGames, game);
      setIsInMyGames(Boolean(wishListGame));
      setReview(wishListGame?.review ?? "");
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
        <GenreList genre={game.genre} />
      </div>
      <AddToLibraryButton
        game={game}
        onUpdate={() => {
          const myGames = getMyGames();
          const wishListGame = findGame(myGames, game);
          setIsInMyGames(Boolean(wishListGame));
          setReview(wishListGame?.review ?? "");
        }}
      />
      <p className="gameDesc">{game.description}</p>
      <div>
        {game.screenshots.map((picURL) => (
          <img className="screenshot" key={picURL} src={picURL} />
        ))}
      </div>
      <div className="gameCover">{game.cover}</div>
      <div className="gameURL">{game.url}</div>
      <div className="review">
        {isInMyGames ? (
          <div>
            <textarea
              value={review}
              disabled={!isInMyGames}
              onChange={(e) => {
                setReview(e.target.value);
              }}
            ></textarea>
            <button
              disabled={!isInMyGames || !review}
              onClick={() => {
                const gameCopy = { ...game, review };
                updateMyGames(gameCopy);
              }}
            >
              save
            </button>
          </div>
        ) : (
          "To review a game please add it to your library"
        )}
      </div>
    </div>
  );
}

export default GameDetailsPage;
