import React from "react";
import { Link } from "react-router-dom";

const LandingView = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-teal-100 via-blue-200 to-orange-400">
      <h1 className="text-3xl text-purple-900 mb-20 border rounded-md">
        The Landining
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/login">
              <button className="border border-yellow-400 rounded-md">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingView;
