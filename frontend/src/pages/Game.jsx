/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-syntax */
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import Player from "../components/Player";
import CharacterContext from "../context/Characters";
import FightContext from "../context/FightUtils";
import picklerick from "../assets/picklerick.png";
import mrMeeseeks from "../assets/mr_meeseeks.png";
import pistoportal from "../assets/pistoportal.png";

// import song from "../assets/rickandmortysong.mp3";

function Game() {
  const { character, enemy, random, setWinner } = useContext(CharacterContext);
  const {
    lifePlayer,
    lifeEnemy,
    history,
    turn,
    attackEnemy,
    attackPlayer,
    nickname,
  } = useContext(FightContext);
  // eslint-disable-next-line no-unused-vars
  // const [lifePlayer, setlifePlayer] = useState(100);
  // const [lifeEnemy, setlifeEnemy] = useState(100);
  // const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (lifeEnemy <= 0) {
      setWinner(character);
      navigate("/winner");
    } else if (lifePlayer <= 0) {
      setWinner(enemy);
      navigate("/winner");
    }
  }, [lifePlayer, lifeEnemy]);

  return (
    <div className="flex flex-row justify-around w-full">
      {character ? (
        <>
          <Player
            player={nickname}
            name={character.name}
            image={character.image}
            heart={lifePlayer}
            power={attackPlayer}
          />
          <div className="flex justify-center flex-col items-center gap-5">
            <div className="flex justify-center items-center mx-10">
              <button
                type="button"
                className="random"
                onClick={random}
                aria-label="random"
              />
              <Link to="/winner" />
            </div>
            <div>
              <Link to={`${lifeEnemy <= 0 ? "/winner" : ""}`}>
                <img
                  src={mrMeeseeks}
                  alt="Attack One"
                  onClick={() => turn(1, 1)}
                />
                <img
                  src={pistoportal}
                  alt="Attack Two"
                  onClick={() => turn(1.3, 0.8)}
                />
                <img
                  src={picklerick}
                  alt="Attack Three"
                  onClick={() => turn(1.6, 0.6)}
                />
              </Link>
              <div className="list h-4  flex flex-reverse">
                <ul>{history.map((x) => <li>{x}</li>).reverse()}</ul>
              </div>
            </div>
          </div>
          <Player
            player="Enemy"
            name={enemy.name}
            image={enemy.image}
            heart={lifeEnemy}
            power={attackEnemy}
          />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
export default Game;
