function CrewCard({ imagePath, name, description }) {
  return (
    <div className="flex flex-col justify-around items-center w-[250px] backdrop-filter backdrop-blur-3xl bg-green-800 border-8 border-double border-green-900 text-white bg-opacity-40 rounded-lg border-8 border-double border-green-900 m-2">
      <div className="uppercase text-center p-3 font-bold text-1xl text-white">
        {name}
      </div>
      <img
        src={imagePath}
        className="object-cover rounded-full transition hover:scale-105 w-[180px] h-[180px]"
        alt={name}
      />
      <div className="mt-5 p-5 border-t-4 border-green-900 w-full text-center flex justify-center items-center text-xs min-h-[100px]">
        {description}
      </div>
    </div>
  );
}

export default CrewCard;
