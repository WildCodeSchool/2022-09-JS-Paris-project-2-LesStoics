import { Link } from "react-router-dom";
import { useContext } from "react";
import Player from "../components/Player";
import characterContext from "../context/Characters";
import "../styles/App.css";

import randomImg from "../assets/random.svg"
import fightImg from "../assets/fight.svg"

function Game() {
  const { character } = useContext(characterContext);
  const { enemy } = useContext(characterContext);
  const { random } = useContext(characterContext);

  return (
      <div className="flex flex-row jusify-around">
        {character ? (
          <>
            <Player name={character.name} image={character.image} />
            <div className="flex justify-center items-center mx-10">
            <button type="button" onClick={random}>
            <img src={randomImg} alt='Random'/>
            </button>
            <Link to="/winner">
              <img src={fightImg} alt="Fight" />
            </Link>
            </div>
            <Player name={enemy.name} image={enemy.image} />
          </>
        ) : (
          "Loading..."
        )}
      </div>
  );
}

export default Game;
