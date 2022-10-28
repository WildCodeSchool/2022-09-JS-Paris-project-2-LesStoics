import { Link } from "react-router-dom";
import { useContext } from "react";
import Player from "../components/Player";
import "../styles/App.css";
import characterContext from "../context/Characters";

function Game() {
  const { character } = useContext(characterContext);
  const { enemy } = useContext(characterContext);
  const { random } = useContext(characterContext);

  return (
    <div>
      <div className="flex flex-row jusify-between">
        {character ? (
          <>
            <Player name={character.name} image={character.image} />
            <Player name={enemy.name} image={enemy.image} />
          </>
        ) : (
          ""
        )}
        <button type="button" onClick={random}>
          random
        </button>
      </div>
      <Link to="/winner">Who winner?</Link>
    </div>
  );
}

export default Game;
