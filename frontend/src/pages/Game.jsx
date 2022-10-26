import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Player from "../components/Player";
import "../styles/App.css";
import FetchApi from "../API/FetchApi";

function Game() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    FetchApi().then((data) => {
      setCharacter(data[19]);
    });
  }, []);

  return (
    <div>
      <Player />
      <div>Versus</div>
      <div>Fight</div>
      <Player />
      <Link to="/winner">Who winner?</Link>
      <p>{character}</p>
    </div>
  );
}

export default Game;
