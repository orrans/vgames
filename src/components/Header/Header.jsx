import React, { useState } from "react";
import "./Header.css";

function Header() {
  return <div className="header">
   <img src="https://placeholder.photo/img/300x100?text=vgames&bg_color=999999"  />
   <div className="navBar">
    <button>Home</button>
    <button>Whish List</button>
    <button>About</button>
   </div>
  </div>;
}

export default Header;
