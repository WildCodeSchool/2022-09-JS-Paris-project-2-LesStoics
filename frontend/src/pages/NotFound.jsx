import { Link } from "react-router-dom";
import React from "react";

function NotFound() {
  return (
    <div className="bg-slate-900 w-full h-full flex justify-center items-center">
      <div className="background-img">
        <div className="space" />
        <div className="wrapper">
          <div className="img-wrapper flex justify-center items-center height">
            <span>44</span>
          </div>
          <p className="m-auto">
            The page you are trying to search has been moved to another
            universe.
          </p>
          <Link to="/">
            <button type="button" className="home" aria-label="home" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
