/* eslint-disable react/prop-types */
function WinnerCard({ name, image }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center backdrop-filter backdrop-blur-3xl backdrop-saturate-150 bg-black bg-opacity-40 rounded-lg border border-zinc-800 min-h-[70vh] min-w-[40vh] p-4">
        <img
          src={image}
          className="rounded-full

"
          alt={name}
        />
        <p className="uppercase mt-10 border-b-4 border-zinc-800 w-full text-center pb-5 font-bold text-2xl text-white">
          {name}
        </p>
      </div>
    </div>
  );
}

export default WinnerCard;
