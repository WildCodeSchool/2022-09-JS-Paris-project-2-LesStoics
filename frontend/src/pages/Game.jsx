/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-syntax */
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Player from "../components/Player";
import characterContext from "../context/Characters";

// import song from "../assets/rickandmortysong.mp3";

function Game() {
  const { character, enemy, random, setWinner, nickname } =
    useContext(characterContext);
  const [life, setLife] = useState(100);
  const [enemyLife, setEnemyLife] = useState(100);
  const [history, setHistory] = useState([]);

  // useEffect(() => {
  //   if (enemyLife <= 0) {
  //     setWinner(character);
  //   }
  //   if (life <= 0) {
  //     setWinner(enemy);
  //   }
  // }, enemyLife);

  const mathRandom = (max, min) => {
    const A = Math.floor(Math.random() * (max - min) + 5);
    if (A > 0) {
      return A;
    }
    return 0;
  };

  const getRandom = (max, min) => {
    return Math.floor(Math.random() * max + min);
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

  const fight = () => {
    console.log(`OpponentAttack is : ${opponent.attack}`);
    console.log(`OpponentDefense is : ${opponent.defense}`);
    console.log(`PlayerAttack is : ${player1.attack}`);
    console.log(`PlayerDefense is : ${player1.defense}`);
    while (player1.life > 0 && opponent.life > 0) {
      let spell = parseInt(prompt("Choisir sort 1 2 ou 3"), 10);
      console.log(player1.life);
      console.log(opponent.life);
      let attackAttempt = Math.random();
      if (spell === 1) {
        attackAttempt = Math.random();
        console.log(attackAttempt);
        if (attackAttempt) {
          opponent.life = attack(
            opponent.life,
            player1.attack * 1.5,
            opponent.defense
          );
          setEnemyLife(1);
        } else console.log("Failed!");
      } else if (spell === 2) {
        attackAttempt = Math.random();
        if (attackAttempt < 0.5) {
          console.log(attackAttempt);
          opponent.life = attack(
            opponent.life,
            player1.attack * 2,
            opponent.defense
          );
          setEnemyLife(2);
        } else console.log("Failed!", attackAttempt);
      } else if (spell === 3) {
        attackAttempt = Math.random();
        if (attackAttempt < 0.33) {
          console.log(attackAttempt);
          opponent.life = attack(
            opponent.life,
            player1.attack * 3,
            opponent.defense
          );
          setEnemyLife(3);
        } else console.log("Failed!", attackAttempt);
      } else {
        spell = parseInt(prompt("Choisir sort 1 2 ou 3 svp"), 10);
      }
      player1.life = attack(player1.life, opponent.attack, player1.defense);
      setEnemyLife(opponent.life);
      console.log(`Player HP is : ${player1.life}`);
      console.log(`Opponent HP is : ${opponent.life}`);
      console.log(`Opponent HP state is : ${enemyLife}`);
    }
    if (player1.life <= 0) {
      setWinner(enemy);
      console.log(`${opponent.name} Won !`);
    } else {
      setWinner(character);
      console.log(`${player1.name} Won !`);
    }
  };

  const handleOne = () => {
    opponent.life = attack(enemyLife, player1.attack, opponent.defense);
    setEnemyLife(opponent.life);

    setHistory((y) => [...y, "salut"]);
    if (enemyLife <= 0) {
      setWinner(character);
    }
  };

  const handleTwo = () => {
    let attackAttempt = Math.random();
    attackAttempt = Math.random();
    if (attackAttempt < 0.5) {
      console.log(attackAttempt);
      opponent.life = attack(enemyLife, player1.attack * 2, opponent.defense);
      setEnemyLife(opponent.life);
    }
  };

  const handleThree = () => {
    let attackAttempt = Math.random();
    attackAttempt = Math.random();
    if (attackAttempt < 0.33) {
      console.log(attackAttempt);
      opponent.life = attack(enemyLife, player1.attack * 3, opponent.defense);
      setEnemyLife(opponent.life);
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
            power={getRandom(90, 10)}
          />
          <div className="flex justify-center flex-col items-center gap-5">
            <div className="flex justify-center items-center mx-10">
              <button
                type="button"
                className="random"
                onClick={random}
                aria-label="random"
              />
              <Link to="/winner">
                <button
                  type="button"
                  className="fight"
                  onClick={fight}
                  aria-label="fight"
                />
              </Link>
            </div>
            <div>
              <Link to={`${enemyLife <= 0 ? "/winner" : ""}`}>
                <button type="button" onClick={handleOne}>
                  ATTACK
                </button>
                <button type="button" onClick={handleTwo}>
                  ATTACK2222
                </button>
                <button type="button" onClick={handleThree}>
                  ATTACK33333
                </button>
              </Link>
              <div className="list">
                <ul>
                  {history.map((x) => (
                    <li>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Player
            player="Enemy"
            name={enemy.name}
            image={enemy.image}
            heart={enemyLife}
            power={getRandom(90, 10)}
          />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
export default Game;
