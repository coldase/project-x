import React from "react";
import { Link, useParams } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-800 text-white shadow-md">
      <ul>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/">
          <li>Landing</li>
        </Link>
        <Link to="/user">
          <li>User</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
