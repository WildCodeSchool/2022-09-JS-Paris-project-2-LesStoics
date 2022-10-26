import { Link } from "react-router-dom";
import "../styles/App.css";

function Game() {
  return (
    <div>
      Game page here
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Link to="/winner">Who winner?</Link>
      </button>
    </div>
  );
}

export default Game;
