/* eslint-disable no-restricted-syntax */
import { Link } from "react-router-dom";
import { useContext } from "react";
import Player from "../components/Player";
import "../styles/App.css";
import characterContext from "../context/Characters";

function Game() {
  const { character } = useContext(characterContext);
  const { enemy } = useContext(characterContext);
  const { random } = useContext(characterContext);
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
      player1.life = attack(player1.life, opponent.attack, player1.defense);
      console.log(`Player HP is : ${player1.life}`);
      opponent.life = attack(opponent.life, player1.attack, opponent.defense);
      console.log(`Opponent HP is : ${opponent.life}`);
    }
    if (player1.life <= 0) {
      console.log(`${opponent.name} Won !`);
    } else {
      console.log(`${player1.name} Won !`);
    }
  };
  return (
    <div>
      <div className="flex flex-row jusify-between">
        {character ? (
          <>
            <Player name={character.name} image={character.image} />
            <Player name={enemy.name} image={enemy.image} />
            <button type="button" onClick={fight}>
              Fight
            </button>
          </>
        ) : (
          ""
        )}
        <button type="button" onClick={random}>
          random
        </button>
      </div>
      <Link to="/winner">Who winner?</Link>
    </div>
  );
}

export default Game;
