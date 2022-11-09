/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-syntax */
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Player from "../components/Player";
import characterContext from "../context/Characters";
import picklerick from "../assets/picklerick.png";
import mrMeeseeks from "../assets/mr_meeseeks.png";
import pistoportal from "../assets/pistoportal.png";

// import song from "../assets/rickandmortysong.mp3";

function Game() {
  const { character, enemy, random, setWinner, nickname } =
    useContext(characterContext);
  // eslint-disable-next-line no-unused-vars
  const [life, setLife] = useState(100);
  const [enemyLife, setEnemyLife] = useState(100);
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (enemyLife < 1) {
      setWinner(character);
      navigate("/winner");
    }
    if (life <= 0) {
      setWinner(enemy);
      navigate("/winner");
    }
  }, [enemyLife]);

  const mathRandom = (max, min) => {
    const A = Math.floor(Math.random() * (max - min) + 5);
    if (A > 0) {
      return A;
    }
    return 0;
  };

  const attackPlayer = mathRandom(55, 20);
  const attackOpponent = mathRandom(35, 20);
  const defensePlayer = mathRandom(80, 75);
  const defenseOpponent = mathRandom(10, 5);

  const player1 = {
    id: character,
    name: character.name,
    attack: attackPlayer,
    life: 100,
    defense: defensePlayer,
  };
  const opponent = {
    id: character,
    name: enemy.name,
    attack: attackOpponent,
    life: 100,
    defense: defenseOpponent,
  };

  const attack = (lifePlayer, attackEnemy, defPlayer) => {
    const damage = Math.floor(Math.random() * (attackEnemy - defPlayer) + 1);
    if (damage > 0) return lifePlayer - damage;
    return lifePlayer;
  };

  const fight = (multiplier, chance) => {
    let damageDone = 0;
    let newLifePlayer = 0;
    const attackAttempt = Math.random();
    if (attackAttempt < chance) {
      newLifePlayer = attack(
        enemyLife,
        player1.attack * multiplier,
        opponent.defense
      );
      damageDone = enemyLife - newLifePlayer;

      setEnemyLife(newLifePlayer);
      setHistory((y) => [
        ...y,
        `${nickname} did ${damageDone} damage to Opponent`,
      ]);
    } else setHistory((y) => [...y, `${nickname} failed his attack!`]);
  };

  const enemyFight = (multiplier, chance) => {
    let damageDoneByEnemy = 0;
    let newLifeEnemy = 0;
    const attackAttempt = Math.random();
    const delayedAttack = () => {
      if (attackAttempt < chance) {
        newLifeEnemy = attack(
          life,
          opponent.attack * multiplier,
          player1.defense
        );
        damageDoneByEnemy = life - newLifeEnemy;

        setLife(newLifeEnemy);
        setHistory((y) => [
          ...y,
          `Enemy did ${damageDoneByEnemy} damage to ${nickname}`,
        ]);
      } else setHistory((y) => [...y, `Enemy failed his attack!`]);
    };
    setTimeout(delayedAttack, 2000);
  };

  const turn = (multiplierPlayer, chancePlayer) => {
    fight(multiplierPlayer, chancePlayer); // Player Turn
    const choseEnemySpell = Math.random();
    if (choseEnemySpell < 0.33) {
      // Make animation of spell 1
      enemyFight(1, 1); // Set chance and multiplier
    } else if (choseEnemySpell < 0.66) {
      // Make animation of spell 2
      enemyFight(1.5, 0.75);
    } else {
      // Make animation of spell 3
      enemyFight(2, 0.5);
    }
  };

  return (
    <div className="flex flex-row justify-around w-full">
      {character ? (
        <>
          <Player
            player={nickname}
            name={character.name}
            image={character.image}
            heart={life}
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
              <Link to={`${enemyLife <= 0 ? "/winner" : ""}`}>
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
            heart={enemyLife}
            power={attackOpponent}
          />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
export default Game;
