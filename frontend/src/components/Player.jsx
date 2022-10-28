/* eslint-disable react/prop-types */

// import Card from "./Card";
// import Button from "./Button";

function Player({ name, image }) {
  return (
    <div className="flex flex-col bg-gray-800	text-white text-center">
      <img
        src={image}
        className="rounded-full

"
        alt={name}
      />
      <p className="uppercase">{name}</p>
    </div>
  );
}

export default Player;
