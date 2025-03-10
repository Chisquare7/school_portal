import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">School Portal</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Student List</Link>
          <Link to="/signup" className="hover:text-gray-400">Student Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
