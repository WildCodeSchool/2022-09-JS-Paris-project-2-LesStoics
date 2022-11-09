import { Link } from "react-router-dom";
import { useContext } from "react";
import characterContext from "../context/Characters";
import WinnerCard from "../components/WinnerCard";

function Winner() {
  const { winner } = useContext(characterContext);

  return (
    <div className="flex justify-center flex-col items-center ">
      <div className="uppercase text-5xl my-4">winner:</div>
      {winner ? <WinnerCard name={winner.name} image={winner.image} /> : ""}
      <Link to="/">
        <button type="button" className="replay" aria-label="replay" />
      </Link>
    </div>
  );
}

export default Winner;
