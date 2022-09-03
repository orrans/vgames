import React, { useState } from "react";
import { addToMyGames, findGame, getMyGames, removeFromMyGames } from "../../utils/api";
import "./AddToLibraryButton.css";

function AddToLibraryButton(props) {
  const myGames = getMyGames();
  const isInMyGamesOriginal = Boolean(findGame(myGames, props.game));
  const [isInMyGames, setIsInMyGames] = useState(isInMyGamesOriginal);

  return <div className="addToLibraryButton"> 
    <button
        onClick={(e) => {
          e.stopPropagation();
          
          if (isInMyGames) {
            setIsInMyGames(false);
            removeFromMyGames(props.game);
          } else {
            setIsInMyGames(true);
            addToMyGames(props.game);
          }

          props.onUpdate?.()
        }}
      >
        {`${isInMyGames ? "Remove from" : "Add to"} library`}
      </button>
  </div>;
}

export default AddToLibraryButton;
