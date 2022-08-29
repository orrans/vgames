import React, { useState } from "react";
import "./Search.css";

function Search(props) {
  return <div className="search">
    <input onKeyUp={props.onChange} type="text" placeholder="Search"/>
  </div>;
}

export default Search;
