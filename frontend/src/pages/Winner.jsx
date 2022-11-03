import { Link } from "react-router-dom";
import { useContext } from "react";
import characterContext from "../context/Characters";
import Player from "../components/Player";

function Winner() {
  const { character } = useContext(characterContext);
  const { enemy } = useContext(characterContext);

  return (
    <div>
      {character ? (
        <>
          <Player name={character.name} image={character.image} />
          <Player name={enemy.name} image={enemy.image} />
        </>
      ) : (
        ""
      )}
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Link to="/">ssssss</Link>
      </button>
    </div>
  );
}

export default Winner;
