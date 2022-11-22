import { Link } from "react-router-dom";
import React from "react";
import CrewCard from "../components/CrewCard";
import Audrey from "../assets/photo_crew.png";
import Victor from "../assets/public.gif";
import Kevin from "../assets/snowball.png";
import Magomed from "../assets/picklerick.png";
import Cedric from "../assets/replay.png";

const crewMate = [
  {
    name: "Audrey",
    image: Audrey,
    description: "To infinity and beyond!",
  },
  {
    name: "Victor",
    image: Victor,
    description: "To infinity and beyond!",
  },
  {
    name: "Kevin",
    image: Kevin,
    description: "To infinity and beyond!",
  },
  {
    name: "Magomed",
    image: Magomed,
    description: "To infinity and beyond!",
  },
  {
    name: "Cedric",
    image: Cedric,
    description: "To infinity and beyond!",
  },
];
function Credits() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-5xl mb-5">
        <h1>THE CREW</h1>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {crewMate.map((crew) => (
          <CrewCard
            name={crew.name}
            image={crew.image}
            description={crew.description}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link to="/">
          <button type="button" className="home" aria-label="home" />
        </Link>
      </div>
    </div>
  );
}

export default Credits;
