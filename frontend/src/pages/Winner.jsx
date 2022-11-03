import { Link } from "react-router-dom";
import { useContext } from "react";
import characterContext from "../context/Characters";
import WinnerCard from "../components/WinnerCard";

function Winner() {
  const { winner } = useContext(characterContext);

  return (
    <div>
      {winner ? <WinnerCard name={winner.name} image={winner.image} /> : ""}
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
