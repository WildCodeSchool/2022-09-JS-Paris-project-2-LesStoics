/* eslint-disable react/prop-types */

import heartImg from "../assets/health.png";
import powerImg from "../assets/attack.png";
import defenseImg from "../assets/defense.png";

function Player({ name, image, heart, power, player, defense }) {
  return (
    <div>
      <div className="mt-14 flex flex-col justify-center items-center backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-gradient-to-b from-green-400 to-yellow-300 bg-opacity-40 rounded-lg border-8 border-double border-green-900 min-h-[90vh] max-w-[50vh] max-h-[90vh] min-w-[50vh] p-4">
        <div className="mb-15 text-center uppercase text-3xl py-2">
          {player}
        </div>
        <img
          src={image}
          className="rounded-full

"
          alt={name}
        />
        <p className="uppercase mt-10 border-b-4 border-zinc-800 w-full text-center pb-5 font-bold text-2xl text-white">
          {name}
        </p>
        <div className="uppercase mt-2 border-b-4 border-zinc-800 w-1/2 text-center pb-3 flex justify-center items-center">
          <img src={heartImg} alt="Heart" className="" />
          <p className="ml-3 text-white text-3xl">{heart}</p>
        </div>
        <div className="uppercase mt-2 flex justify-center items-center">
          <img src={powerImg} alt="Power" />
          <p className="ml-5 text-white text-3xl">{power}</p>
        </div>
        <div className="uppercase mt-2 border-t-4 border-zinc-800 w-1/2 text-center pb-3 flex justify-center items-center">
          <img src={defenseImg} alt="Defense" />
          <p className="ml-5 text-white text-3xl">{defense}</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
