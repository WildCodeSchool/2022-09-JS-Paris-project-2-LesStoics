import { useContext } from "react";
import { Link } from "react-router-dom";
import characterContext from "../context/Characters";

import portal from "../assets/portal.svg";

function Start() {
  const { setNickname, nickname } = useContext(characterContext);

  const handleChange = (event) => {
    setNickname(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <Link to="/game">
        <h1 className="uppercase absolute top-[30%] left-[43%] z-[1] text-9xl cursor-pointer font">
          start
        </h1>
      </Link>
      <img src={portal} alt="portal" className="w-[30%] animate-spin" />
      <div className="mt-10 text-2xl">Your nickname:</div>
      <label
        htmlFor="UserEmail"
        className={`${
          nickname === ""
            ? "bg-red-200 border border-red-50"
            : "bg-green-50 border border-green-400"
        }relative w-2/12 mt-2 block overflow-hidden rounded-md border border-gray-200 p-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600`}
      >
        <input
          type="email"
          id="UserEmail"
          placeholder="Email"
          onChange={handleChange}
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
      </label>
    </div>
  );
}

export default Start;
