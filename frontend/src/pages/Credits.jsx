import { Link } from "react-router-dom";
import React from "react";
import CrewCard from "../components/CrewCard";
import audrey from "../assets/crew_audrey.png";
import victor from "../assets/crew_victor.jpg";
import kevin from "../assets/public.gif";
import magomed from "../assets/crew_mago.gif";
import cedric from "../assets/snowball.png";

const crewMate = [
  {
    name: "Audrey Jacquemin",
    image: audrey,
    description: "To infinity and beyond!",
  },
  {
    name: "Victor Cenus",
    image: victor,
    description: "[hip hip array!]",
  },
  {
    name: "Kevin Lemniai",
    image: kevin,
    description: "To infinity and beyond!",
  },
  {
    name: "magomed sadakhanov",
    image: magomed,
    description: "To infinity and beyond!",
  },
  {
    name: "Cedric Cleron",
    image: cedric,
    description: "while(noSucces){tryAgain(); if(Dead)break;}",
  },
];

function Credits() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between text-5xl p-4 text-white">
        <h1>THE CREW</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center p-4 w-full my-10">
        {crewMate.map((crew) => (
          <CrewCard
            key={crew.name}
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
