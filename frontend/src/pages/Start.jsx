import { Link } from "react-router-dom";
import "../styles/App.css";
import portal from "../assets/portal.svg";

function Start() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <Link to="/game">
        <h1 className="uppercase absolute top-[42%] left-[43%] z-[1] text-9xl cursor-pointer font">
          start
        </h1>
      </Link>
      <img src={portal} alt="portal" className="w-[30%] animate-spin" />
    </div>
  );
}

export default Start;
