import { Link } from "react-router-dom";
import "../styles/App.css";

function Winner() {
  return (
    <div>
      Here is winner
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Link to="/">Restart</Link>
      </button>
    </div>
  );
}

export default Winner;
