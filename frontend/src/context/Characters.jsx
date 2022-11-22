import { createContext, useState, useEffect } from "react";
import FetchApi from "../API/fetchApi";

const CharacterContext = createContext();

export function Characters({ children }) {
  const [playerData, setPlayerData] = useState([]);
  const [enemyData, setEnemyData] = useState([]);
  const [winner, setWinner] = useState();

  let id1 = Math.floor(Math.random() * (825 + 1) + 1);
  let id2 = Math.floor(Math.random() * (825 + 1) + 1);

  const getRandom = () => {
    FetchApi(id1).then((data) => {
      setPlayerData(data);
    });
    FetchApi(id2).then((data) => {
      setEnemyData(data);
    });
  };

  useEffect(() => {
    getRandom();
  }, []);

  const random = () => {
    id1 = Math.floor(Math.random() * (825 + 1) + 1);
    id2 = Math.floor(Math.random() * (825 + 1) + 1);
    if (id1 === id2) {
      id1 = Math.floor(Math.random() * (825 + 1) + 1);
    }
    getRandom();
  };

  return (
    <CharacterContext.Provider
      value={{
        playerData,
        enemyData,
        random,
        winner,
        setWinner,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export default CharacterContext;
