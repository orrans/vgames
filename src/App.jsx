import { useState, useEffect } from "react";
import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import GameDetailsPage from "./pages/GameDetailsPage/GameDetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import WishListPage from "./pages/WishListPage/WishListPage";
import { saveToken } from "./utils/api";

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
      {/* <HomePage/> */}
      {/* <AboutPage /> */}
      {/* <WishListPage /> */}
      <GameDetailsPage id={81249}/>
    </div>
  );
}

export default App;
