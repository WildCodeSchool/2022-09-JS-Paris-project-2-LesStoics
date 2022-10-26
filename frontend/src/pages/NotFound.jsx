import { Link } from "react-router-dom";
import React from "react";

function NotFound() {
  return (
    <div>
      <h1>404 not found</h1>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <Link to="/">Go Home</Link>
      </button>
    </div>
  );
}

export default NotFound;
