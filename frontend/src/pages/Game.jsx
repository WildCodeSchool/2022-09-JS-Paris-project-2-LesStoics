import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import useSound from "use-sound";
import attackSound from "../assets/attack.mp3";
import waitSound from "../assets/wait.mp3";

import Player from "../components/Player";
import CharacterContext from "../context/Characters";
import FightContext from "../context/FightUtils";
import ImageButton from "../components/ImageButton";
import picklerick from "../assets/picklerick.png";
import snowball from "../assets/snowball.png";
import pistoportal from "../assets/pistoportal.png";

function Game() {
  const { playerData, enemyData, fetchCharacters, setWinner } =
    useContext(CharacterContext);
  const {
    history,
    turn,
    nickname,
    player,
    enemy,
    setPlayer,
    setEnemy,
    mathRandom,
  } = useContext(FightContext);
  const [ready, setReady] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const [playAttack] = useSound(attackSound);
  const [playWait] = useSound(waitSound);

  const randomChar = () => {
    setPlayer({
      ...player,
      attack: mathRandom(20, 15),
      defense: mathRandom(10, 10),
    });
    setEnemy({
      ...enemy,
      attack: mathRandom(20, 15),
      defense: mathRandom(10, 10),
    });
    fetchCharacters();
  };

  useEffect(() => {
    if (enemy.life <= 0) {
      setWinner(playerData);
      navigate("/winner");
    } else if (player.life <= 0) {
      setWinner(enemyData);
      navigate("/winner");
    }
  }, [player.life, enemy.life]);

  const disableButton = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, "3000");
  };

  const playSound = () => {
    if (disabled) {
      playWait();
    } else {
      playAttack();
    }
  };

  return (
    <div className="flex flex-row justify-around w-full px-10">
      {playerData ? (
        <>
          <Player
            player={!nickname ? "You" : nickname}
            name={playerData.name}
            image={playerData.image}
            heart={player.life}
            power={player.attack}
            defense={player.defense}
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
                    onClick={randomChar}
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
                  <div className="flex flex-row items-center overflow-hidden justify-center align-center gap-3 h-full">
                    <button
                      type="button"
                      className="w-full flex items-center justify-center gap-3"
                      onClick={playSound}
                    >
                      <ImageButton
                        src={snowball}
                        className="w-40 snowball"
                        alt="Attack One"
                        disabled={disabled}
                        onClick={() => {
                          turn(1, 1);
                          disableButton();
                        }}
                      />
                      <ImageButton
                        src={pistoportal}
                        className="w-40 pisto"
                        alt="Attack Two"
                        disabled={disabled}
                        onClick={() => {
                          turn(1.4, 0.8);
                          disableButton();
                        }}
                      />
                      <ImageButton
                        src={picklerick}
                        className="w-40 pickle"
                        alt="Attack Three"
                        disabled={disabled}
                        onClick={() => {
                          turn(1.8, 0.6);
                          disableButton();
                        }}
                      />
                    </button>
                  </div>
                  <span
                    className="loader after:bg-green-800"
                    style={{ display: disabled ? "block" : "none" }}
                  />
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
            name={enemyData.name}
            image={enemyData.image}
            heart={enemy.life}
            power={enemy.attack}
            defense={enemy.defense}
          />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
export default Game;
