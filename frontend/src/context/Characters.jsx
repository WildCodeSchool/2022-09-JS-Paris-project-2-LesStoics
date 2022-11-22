import { createContext, useState, useEffect } from "react";
import FetchApi from "../API/fetchApi";

const CharacterContext = createContext();

export function Characters({ children }) {
  const [playerData, setPlayerData] = useState();
  const [enemyData, setEnemyData] = useState();
  const [winner, setWinner] = useState();

  const getRandomIDs = () => {
    let playerID = Math.floor(Math.random() * (825 + 1) + 1);
    const enemyID = Math.floor(Math.random() * (825 + 1) + 1);
    while (playerID === enemyID) {
      playerID = Math.floor(Math.random() * (825 + 1) + 1);
    }
    return [playerID, enemyID];
  };

  const fetchCharacters = () => {
    const [playerID, enemyID] = getRandomIDs();
    FetchApi(playerID).then((data) => {
      setPlayerData(data);
    });
    FetchApi(enemyID).then((data) => {
      setEnemyData(data);
    });
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        playerData,
        enemyData,
        fetchCharacters,
        winner,
        setWinner,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export default CharacterContext;
