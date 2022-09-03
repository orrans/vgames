import React, { useState } from "react";
import "./GameCard.css";
import {useNavigate} from 'react-router-dom';

function GameCard(props) {
  const { title, id, genre, picture } = props;
const navTo =  useNavigate()
  return (
    <div className="gameCard" onClick={()=>{
      navTo('/game/' + id)
    }}>
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
        {genre.map((genre)=> (
          <React.Fragment key={genre}>
            <div className="genre badge text-bg-primary">{genre}</div>
            {' '}
          </React.Fragment>
        ))}</div>
      <button>Add to Wishlist</button>
    </div>
  );
}

export default GameCard;
