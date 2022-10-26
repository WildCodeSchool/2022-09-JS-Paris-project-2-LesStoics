import { Link } from "react-router-dom";
import "../styles/App.css";
import FetchApi from "../API/FetchApi";

function Start() {
  return (
    <div>
      <h1>Welcome to the start page</h1>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Link to="/game">Play</Link>
      </button>
      <h1>Salut</h1>
      <button type="button" onClick={FetchApi}>
        Click me
      </button>
    </div>
  );
}

export default Start;