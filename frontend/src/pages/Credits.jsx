import { Link } from "react-router-dom";
import React from "react";
import CrewCard from "../components/CrewCard";
import Audrey from "../assets/crew_audrey.gif";
import Victor from "../assets/crew_victor.gif";
import Kevin from "../assets/crew_kevin.gif";
import Magomed from "../assets/crew_mago.gif";
import Cedric from "../assets/crew_cedric.gif";

const crewMate = [
  {
    name: "Audrey Jacquemin",
    image: Audrey,
    description: "background-color: black;",
  },
  {
    name: "Victor Cenus",
    image: Victor,
    description: "background-color: pink;",
  },
  {
    name: "Kevin Lemniai",
    image: Kevin,
    description: "while(true) try",
  },
  {
    name: "magomed sadakhanov",
    image: Magomed,
    description: "background: none;",
  },
  {
    name: "Cedric Cleron",
    image: Cedric,
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
            imagePath={crew.image}
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
