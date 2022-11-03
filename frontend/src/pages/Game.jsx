/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-syntax */
import { Link } from "react-router-dom";
import { useContext } from "react";
import Player from "../components/Player";
import characterContext from "../context/Characters";
import randomImg from "../assets/random.svg";
import fightImg from "../assets/fight.svg";

// import song from "../assets/rickandmortysong.mp3";

function Game() {
  const { character, enemy, random, setWinner } = useContext(characterContext);
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
        if (attackAttempt)
          opponent.life = attack(
            opponent.life,
            player1.attack * 1.5,
            opponent.defense
          );
        else console.log("Failed!");
      } else if (spell === 2) {
        attackAttempt = Math.random();
        if (attackAttempt < 0.5) {
          console.log(attackAttempt);
          opponent.life = attack(
            opponent.life,
            player1.attack * 2,
            opponent.defense
          );
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
        } else console.log("Failed!", attackAttempt);
      } else {
        spell = parseInt(prompt("Choisir sort 1 2 ou 3 svp"), 10);
      }
      player1.life = attack(player1.life, opponent.attack, player1.defense);
      console.log(`Player HP is : ${player1.life}`);
      console.log(`Opponent HP is : ${opponent.life}`);
    }
    if (player1.life <= 0) {
      setWinner(enemy);
      console.log(`${opponent.name} Won !`);
    } else {
      setWinner(character);
      console.log(`${player1.name} Won !`);
    }
  };

  return (
    <div className="flex flex-row justify-around w-full">
      {character ? (
        <>
          <Player
            name={character.name}
            image={character.image}
            heart={100}
            power={attackPlayer}
          />
          <div className="flex justify-center items-center mx-10">
            <button type="button" onClick={random}>
              <img src={randomImg} alt="Random" />
            </button>
            <Link to="/winner">
              <img onClick={fight} src={fightImg} alt="Fight" />
            </Link>
          </div>
          <Player
            name={enemy.name}
            image={enemy.image}
            heart={100}
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
