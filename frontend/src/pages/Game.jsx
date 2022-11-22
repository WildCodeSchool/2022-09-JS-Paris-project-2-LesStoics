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
  const navigate = useNavigate();

  const randomChar = () => {
    setPlayer({
      ...player,
      attack: mathRandom(60, 40),
      defense: mathRandom(40, 20),
    });
    setEnemy({
      ...enemy,
      attack: mathRandom(30, 20),
      defense: mathRandom(10, 5),
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
              <div className="flex justify-center items-center  w-full">
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
            ) : (
              <div className="flex flex-col w-full">
                <div className="h-56 mt-5 backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-black bg-opacity-40 rounded-lg border border-zinc-800">
                  <Link
                    to={`${enemy.life <= 0 ? "/winner" : ""}`}
                    className="flex flex-row items-center overflow-hidden	justify-center align-center gap-3 h-full"
                  >
                    <ImageButton
                      src={snowball}
                      alt="Attack One"
                      onClick={() => turn(1, 1)}
                    />
                    <ImageButton
                      src={pistoportal}
                      alt="Attack Two"
                      onClick={() => turn(1.3, 0.8)}
                    />
                    <ImageButton
                      src={picklerick}
                      alt="Attack Three"
                      onClick={() => {
                        turn(1.6, 0.6);
                        console.log("salut");
                      }}
                    />
                  </Link>
                </div>

                <div className="mt-5 p-2 text-center overflow-auto list min-h-20 flex flex-col-reverse backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-black bg-opacity-40 rounded-lg border border-zinc-800">
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
