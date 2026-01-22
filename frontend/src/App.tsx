import ListGroup from "./components/ListGroup";
import GameList from "./components/Game_test";
import GameComponent from "./components/Game";
// import "./App.css";
import "./components/Game.css";
import TopQuip from "./components/TopQuip";

function App() {
  return (
    <>
      <TopQuip />
      <div className="gameContainer">
        <GameComponent />
        {/* <HeartIcon /> */}
      </div>
    </>
  );
}

export default App;
