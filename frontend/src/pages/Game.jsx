import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
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

  return (
    <div className="columns-1 sm:flex flex-row justify-around w-full px-10">
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
              <div className="grid place-items-center h-screen sm:flex flex-col sm:justify-center sm:items-center sm:align-center sm:w-full">
                <div className="hidden sm:block sm:mb-12 sm:text-4xl font text-green-700">
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
                <div className="bg-green-800 border-8 border-double border-green-900 text-white h-20 sm:h-56 mt-5 backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-black bg-opacity-40 rounded-lg border">
                  <Link
                    to={`${enemy.life <= 0 ? "/winner" : ""}`}
                    className="flex justify-center items-center h-screen flex flex-row items-center overflow-hidden	justify-center align-center gap-3 h-full"
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
