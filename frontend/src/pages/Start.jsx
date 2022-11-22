import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Store } from "react-notifications-component";
import FightContext from "../context/FightUtils";
import portal from "../assets/portal.svg";

function Start() {
  const [shake, setShake] = useState(false);
  const {
    setNickname,
    nickname,
    setPlayer,
    player,
    enemy,
    setEnemy,
    setHistory,
  } = useContext(FightContext);
  const handleChange = (event) => {
    setNickname(event.target.value);
  };

  useEffect(() => {
    setPlayer({ ...player, life: 100 });
    setEnemy({ ...enemy, life: 100 });
    setHistory([]);
  }, []);

  const handleError = () => {
    Store.addNotification({
      title: "Error!",
      message: "Please enter your nickname !",
      type: "danger",
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  };

  const callShake = () => {
    if (nickname) return;
    setShake(true);
    setTimeout(() => setShake(false), 2000);
    handleError();
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <Link to={`${!nickname ? "" : "/game"}`}>
        <button
          type="button"
          className={`${
            shake && "shake"
          } title-font uppercase absolute top-[30%] left-[43%] z-[1] text-9xl cursor-pointer`}
          onClick={() => {
            callShake();
          }}
        >
          start
        </button>
      </Link>
      <img src={portal} alt="portal" className="w-[30%] animate-spin" />
      <div
        className={`${
          shake ? "shake" : ""
        } flex flex-col justify-center items-center text-center w-full`}
      >
        <div className="mt-10 text-2xl">Your nickname:</div>
        <label
          htmlFor="nickname"
          className={`${
            !nickname
              ? "bg-red-200 border border-red-50"
              : "bg-green-50 border border-green-400"
          }relative w-2/12 mt-2 block overflow-hidden rounded-md border border-gray-200 p-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600`}
        >
          <input
            type="text"
            id="nickname"
            placeholder={nickname}
            onChange={handleChange}
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-gray focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
          />
        </label>
      </div>
    </div>
  );
}

export default Start;
