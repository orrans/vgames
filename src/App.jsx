import { useState, useEffect } from "react";
import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import GameDetailsPage from "./pages/GameDetailsPage/GameDetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import MyGamesPage from "./pages/MyGamesPage/MyGamesPage";
import { saveToken } from "./utils/api";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("running saveToken", window);
    saveToken().then(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/library" element={<MyGamesPage />} />
        <Route path="/game/:id" element={<GameDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
