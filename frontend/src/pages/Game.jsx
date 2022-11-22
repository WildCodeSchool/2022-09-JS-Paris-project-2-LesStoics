/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-syntax */
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Player from "../components/Player";
import CharacterContext from "../context/Characters";
import FightContext from "../context/FightUtils";
import picklerick from "../assets/picklerick.png";
import snowball from "../assets/snowball.png";
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
  const [ready, setReady] = useState(false);
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
    <div className="flex flex-row justify-around w-full px-10">
      {character ? (
        <>
          <Player
            player={!nickname ? "You" : nickname}
            name={character.name}
            image={character.image}
            heart={lifePlayer}
            power={attackPlayer}
          />
          <div className="w-2/5 flex">
            {!ready ? (
              <div className="flex flex-col justify-center items-center align-center w-full">
                <div className="text-white mb-12 text-4xl font text-green-700">
                  Choose your card and go fight !!!
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    className="random"
                    onClick={random}
                    aria-label="random"
                  />
                  <button
                    className="fight"
                    type="button"
                    aria-label="fight"
                    onClick={() => setReady(true)}
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-full">
                <div className="bg-green-800 border-8 border-double border-green-900 text-white h-56 mt-5 backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-black bg-opacity-40 rounded-lg border">
                  <Link
                    to={`${lifeEnemy <= 0 ? "/winner" : ""}`}
                    className="flex flex-row items-center overflow-hidden	justify-center align-center gap-3 h-full"
                  >
                    <div>
                      <img
                        src={snowball}
                        alt="Attack One"
                        onClick={() => turn(1, 1)}
                        className="w-40 snowball"
                      />
                    </div>
                    <div>
                      <img
                        src={pistoportal}
                        alt="Attack Two"
                        onClick={() => turn(1.3, 0.8)}
                        className="w-40 pisto"
                      />
                    </div>
                    <div>
                      <img
                        src={picklerick}
                        alt="Attack Three"
                        onClick={() => turn(1.6, 0.6)}
                        className="w-40 pickle"
                      />
                    </div>
                  </Link>
                </div>

                <div className="mt-5 bg-green-800 border-8 border-double border-green-900 text-white p-2 text-center overflow-auto list min-h-20 flex flex-col-reverse backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-black bg-opacity-40 rounded-lg border ">
                  {history.length === 0 ? (
                    <h2 className="">Choose your attack</h2>
                  ) : (
                    <ul>{history.map((x) => <li>{x}</li>).reverse()}</ul>
                  )}
                </div>
              </div>
            )}
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
