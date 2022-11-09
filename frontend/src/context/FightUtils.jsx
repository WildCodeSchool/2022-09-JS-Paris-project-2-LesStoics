/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const FightContext = createContext();

export function FightUtils({ children }) {
  const [lifePlayer, setLifePlayer] = useState(100);
  const [lifeEnemy, setLifeEnemy] = useState(100);
  const [history, setHistory] = useState([]);
  const [nickname, setNickname] = useState();

  const mathRandom = (max, min) => {
    const A = Math.floor(Math.random() * (max - min) + 5);
    if (A > 0) {
      return A;
    }
    return 0;
  };

  const attackPlayer = mathRandom(60, 40);
  const attackEnemy = mathRandom(30, 20);
  const defensePlayer = mathRandom(40, 20);
  const defenseEnemy = mathRandom(10, 5);

  const attack = (receiverLife, casterAttack, receiverDefense) => {
    const damage = Math.floor(
      Math.random() * (casterAttack - receiverDefense) + 10
    );
    if (damage > 0) return receiverLife - damage;
    return receiverLife;
  };

  const fight = (multiplier, chance) => {
    let turnDamageDoneToEnemy;
    let lifeEnemyAfterPlayerAttack;
    const attackAttempt = Math.random();
    if (attackAttempt < chance) {
      lifeEnemyAfterPlayerAttack = attack(
        lifeEnemy,
        attackPlayer * multiplier,
        defenseEnemy
      );
      turnDamageDoneToEnemy = lifeEnemy - lifeEnemyAfterPlayerAttack;

      setLifeEnemy(lifeEnemyAfterPlayerAttack);
      setHistory((prev) => [
        ...prev,
        `${nickname} did ${turnDamageDoneToEnemy} damage to Enemy`,
      ]);
    } else setHistory((prev) => [...prev, `${nickname} failed his attack!`]);
  };

  const enemyFight = (multiplier, chance) => {
    let turnDamageDoneToPlayer;
    let lifePlayerAfterEnemyAttack;
    const attackAttempt = Math.random();
    const delayedAttack = () => {
      if (attackAttempt < chance) {
        lifePlayerAfterEnemyAttack = attack(
          lifePlayer,
          attackEnemy * multiplier,
          defensePlayer
        );
        turnDamageDoneToPlayer = lifePlayer - lifePlayerAfterEnemyAttack;

        setLifePlayer(lifePlayerAfterEnemyAttack);
        setHistory((prev) => [
          ...prev,
          `Enemy did ${turnDamageDoneToPlayer} damage to ${nickname}`,
        ]);
      } else setHistory((prev) => [...prev, `Enemy failed his attack!`]);
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
    <FightContext.Provider
      value={{
        lifePlayer,
        lifeEnemy,
        history,
        turn,
        attackPlayer,
        attackEnemy,
        nickname,
        setNickname,
      }}
    >
      {children}
    </FightContext.Provider>
  );
}
export default FightContext;
