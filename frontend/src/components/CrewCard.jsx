/* eslint-disable react/prop-types */

function CrewCard({ image, name, description }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-gradient-to-b from-green-400 to-yellow-300 bg-opacity-40 rounded-lg border-8 border-double border-green-900 min-h-[40vh] max-w-[35vh] max-h-[40<vh] min-w-[20vh] p-4 mx-2">
        <div className="uppercase text-center pb-5 font-bold text-1xl text-white">
          {name}
        </div>
        <img
          src={image}
          className=" w-25 h-25 object-cover rounded-full transition hover:scale-105"
          alt="img"
        />
        <p className=" mt-5 border-b-4 border-zinc-800 w-full " />
        <p className=" text-center pb-5 text-xs mt-5">{description}</p>
      </div>
    </div>
  );
}

export default CrewCard;
