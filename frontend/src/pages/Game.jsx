import { Link } from "react-router-dom";
import { useContext } from "react";
import Player from "../components/Player";
import characterContext from "../context/Characters";

import song from "../assets/rickandmortysong.mp3";
import randomImg from "../assets/random.svg";
import fightImg from "../assets/fight.svg";

function Game() {
  const { character, enemy, random } = useContext(characterContext);
  const audio = new Audio(song);
  audio.loop = true;

  const randomStat = () => {
    return Math.floor(Math.random() * (100 + 1) + 1);
  };

  const playerLife = randomStat();
  const playerPower = randomStat();
  const enemyLife = randomStat();
  const enemyPower = randomStat();

  return (
    <div className="flex flex-row justify-around w-full">
      {character ? (
        <>
          <Player
            name={character.name}
            image={character.image}
            heart={playerLife}
            power={playerPower}
          />
          <div className="flex justify-center items-center mx-10">
            <button type="button" onClick={random}>
              <img src={randomImg} alt="Random" />
            </button>
            <Link to="/winner">
              <img src={fightImg} alt="Fight" />
            </Link>
          </div>
          <Player
            name={enemy.name}
            image={enemy.image}
            heart={enemyLife}
            power={enemyPower}
          />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Game;
