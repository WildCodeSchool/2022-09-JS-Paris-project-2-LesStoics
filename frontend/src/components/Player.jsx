/* eslint-disable react/prop-types */

import heartImg from "../assets/health.png";
import powerImg from "../assets/attack.png";
import defenseImg from "../assets/defense.png";

function Player({ name, image, heart, power, player, defense }) {
  return (
    <div>
      <div className="text-center text-green-800 uppercase text-4xl p-3 font">
        {player}
      </div>
      <div className="flex flex-col bg-green-800 justify-center items-center backdrop-filter backdrop-blur-3xl bg-opacity-40 rounded-lg border-8 border-double border-green-900 min-h-[90vh] max-w-[50vh] max-h-[90vh] min-w-[50vh] p-4">
        <img src={image} className="rounded-full w-4/5" alt={name} />
        <p className="uppercase mt-10 border-b-4 border-green-800 w-full text-center pb-5 font-bold text-2xl text-white">
          {name}
        </p>
        <div className="uppercase mt-2 border-b-4 border-green-800 w-1/2 p-2 text-center pb-3 flex justify-center items-center">
          <img src={heartImg} alt="Heart" className="w-12" />
          <p className="ml-5 text-white text-3xl">{heart}</p>
        </div>
        <div className="uppercase mt-2 flex justify-center p-2 items-center">
          <img src={powerImg} alt="Power" className="w-12" />
          <p className="ml-5 text-white text-3xl">{power}</p>
        </div>
        <div className="uppercase mt-2 border-t-4 border-green-900 p-3 flex justify-center items-center">
          <img src={defenseImg} alt="Defense" className="w-12" />
          <p className="ml-5 text-white text-3xl">{defense}</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
