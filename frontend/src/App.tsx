import GameComponent from "./components/Game";
import TopQuip from "./components/TopQuip";
import UpperTab from "./components/UpperTab";

import "./components/Game.css";
import "./components/TopQuip.css";
import "./components/UpperTab.css";

import { useState } from "react";

function App() {
  // this.searchQuery = "";
  const [search, setSearch] = useState("");
  // console.log(search + "APP CONSOLE");
  return (
    <>
      <TopQuip />
      <div className="AppContainer">
        <div className="UpperTab">
          <img
            src="https://static.eneba.games/branding/v2/logoFull.svg"
            alt="eneba logo"
            width="155"
            // height="100"
          ></img>
          <span>Games, Gift Cards, Top-Ups & More | Best Deals</span>
          <form>
            <input
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </form>
        </div>
        <div className="gameContainer">
          <GameComponent query={search.toLowerCase()} />
        </div>
      </div>
    </>
  );
}

export default App;
