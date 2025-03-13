import React from "react";
import { Link } from "react-router";

const Home = ({ students }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to the School Portal
        </h1>
        <p className="text-gray-600 text-lg mb-4 italic">
          Manage student information easily
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Total Registered Students:{" "}
            <span className="text-green-600 font-bold">{students.length}</span>
          </h2>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-gray-700">
            Already have an account, Please Log in
          </p>
          <Link
            to="/login"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            Login
          </Link>
          <p className="text-gray-700 mt-4">
            New to the portal, Create new account
          </p>
          <Link
            to="/login"
            className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
