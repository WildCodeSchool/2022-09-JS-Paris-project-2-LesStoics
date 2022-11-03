/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import FetchApi from "../API/fetchApi";

const CharacterContext = createContext();

export function Characters({ children }) {
  const [character, setCharacter] = useState([]);
  const [enemy, setEnemy] = useState([]);
  const [winner, setWinner] = useState([]);

  let ID1 = Math.floor(Math.random() * (825 + 1) + 1);
  let ID2 = Math.floor(Math.random() * (825 + 1) + 1);

  const getRandom = () => {
    FetchApi(ID1).then((data) => {
      setCharacter(data);
    });
    FetchApi(ID2).then((data) => {
      setEnemy(data);
    });
  };

  useEffect(() => {
    getRandom();
  }, []);

  const random = () => {
    ID1 = Math.floor(Math.random() * (825 + 1) + 1);
    ID2 = Math.floor(Math.random() * (825 + 1) + 1);
    if (ID1 === ID2) {
      ID1 = Math.floor(Math.random() * (825 + 1) + 1);
    }
    getRandom();
  };

  return (
    <CharacterContext.Provider
      value={{ character, enemy, random, winner, setWinner }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export default CharacterContext;
