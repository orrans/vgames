import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src="https://placeholder.photo/img/300x100?text=vgames&bg_color=999999" />
      <div className="navBar">
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/library">My Games</Link>
        <Link className="navLink" to="/about">About</Link>
      </div>
    </div>
  );
}

export default Header;
