import { useState } from "react";
import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import WishListPage from "./pages/WishListPage/WishListPage";

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <AboutPage /> */}
      <WishListPage/>
    </div>
  );
}

export default App;
