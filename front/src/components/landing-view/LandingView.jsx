import React from "react";
import { Link } from "react-router-dom";

const LandingView = () => {
  return (
    <div className="h-screen w-screen flex  items-center bg-gradient-to-t from-customBlue to-customAmber ">
      <div className="mx-auto w-3/4 h-3/4 flex items-center bg-customBlue border-8 rounded-md border-customPink ">
        <h1 className="font-bold text-white pl-3 animate-bounce shadow-lg">
          The Greatest React App OF ALL TIME
        </h1>
        <div className="flex w-2/4 pr-20"></div>

        <Link to="/login">
          <button className="font-extrabold text-lg text-customPink border-8 border-customOrange rounded-md shadow-lg bg-customYellow animate-spin">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingView;
