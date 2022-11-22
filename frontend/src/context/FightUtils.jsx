/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

const FightContext = createContext();

export function FightUtils({ children }) {
  const [history, setHistory] = useState([]);
  const [nickname, setNickname] = useState();
  const [enemy, setEnemy] = useState({});
  const [player, setPlayer] = useState({});

  const mathRandom = (max, min) => {
    const A = Math.floor(Math.random() * (max - min) + 5);
    if (A > 0) {
      return A;
    }
    return 0;
  };

  useEffect(() => {
    setPlayer({
      ...player,
      life: 100,
      attack: mathRandom(60, 40),
      defense: mathRandom(40, 20),
    });
    setEnemy({
      ...enemy,
      life: 100,
      attack: mathRandom(30, 20),
      defense: mathRandom(10, 5),
    });
  }, []);

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
        enemy.life,
        player.attack * multiplier,
        enemy.defense
      );
      turnDamageDoneToEnemy = enemy.life - lifeEnemyAfterPlayerAttack;

      setEnemy({ ...enemy, life: lifeEnemyAfterPlayerAttack });
      setHistory((prev) => [
        ...prev,
        `${
          !nickname ? "You" : nickname
        } did ${turnDamageDoneToEnemy} damage to Enemy`,
      ]);
    } else
      setHistory((prev) => [
        ...prev,
        `${!nickname ? "You" : nickname} failed to attack!`,
      ]);
  };

  const enemyFight = (multiplier, chance) => {
    let turnDamageDoneToPlayer;
    let lifePlayerAfterEnemyAttack;
    const attackAttempt = Math.random();
    const delayedAttack = () => {
      if (attackAttempt < chance) {
        lifePlayerAfterEnemyAttack = attack(
          player.life,
          enemy.attack * multiplier,
          player.defense
        );
        turnDamageDoneToPlayer = player.life - lifePlayerAfterEnemyAttack;

        setPlayer({ ...player, life: lifePlayerAfterEnemyAttack });
        setHistory((prev) => [
          ...prev,
          `Enemy did ${turnDamageDoneToPlayer} damage to ${
            !nickname ? "You" : nickname
          }`,
        ]);
      } else setHistory((prev) => [...prev, `Enemy failed his attack!`]);
    };
    if (player.life > 0) setTimeout(delayedAttack, 2000);
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
        history,
        turn,
        nickname,
        setNickname,
        setHistory,
        player,
        enemy,
        setPlayer,
        setEnemy,
        mathRandom,
      }}
    >
      {children}
    </FightContext.Provider>
  );
}
export default FightContext;
