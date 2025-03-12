import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ studentUser, setStudentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setStudentUser(null);
    localStorage.removeItem("studentUser");
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">School Portal</h1>
        <div className="space-x-4">
          {!studentUser ? (
            <>
              <Link to="/" className="hover:text-gray-400">
                Student List
              </Link>
              <Link to="/signup" className="hover:text-gray-400">
                Student Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
