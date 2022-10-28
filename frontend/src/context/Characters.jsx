/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import FetchApi from "../API/FetchApi";

const CharacterContext = createContext();

export function Characters({ children }) {
  const [character, setCharacter] = useState([]);
  const [enemy, setEnemy] = useState([]);

  let ID1 = Math.floor(Math.random() * (825 + 1) + 1);
  let ID2 = Math.floor(Math.random() * (825 + 1) + 1);

  useEffect(() => {
    FetchApi(ID1).then((data) => {
      setCharacter(data);
    });
    FetchApi(ID2).then((data) => {
      setEnemy(data);
    });
  }, []);

  const random = () => {
    ID1 = Math.floor(Math.random() * (825 + 1) + 1);
    ID2 = Math.floor(Math.random() * (825 + 1) + 1);
    if (ID1 === ID2) {
      ID1 = Math.floor(Math.random() * (825 + 1) + 1);
    }
    FetchApi(ID1).then((data) => {
      setCharacter(data);
    });
    FetchApi(ID2).then((data) => {
      setEnemy(data);
    });
  };

  return (
    <CharacterContext.Provider value={{ character, enemy, random, ID1 }}>
      {children}
    </CharacterContext.Provider>
  );
}

export default CharacterContext;
