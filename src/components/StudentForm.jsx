import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentForm = ({ students, setStudents }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name && age && email) {
      setStudents([...students, { name, age, email }]);
      setName("");
      setAge("");
      setEmail("");
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Student Signup
        </h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <label className="block text-gray-700 font-medium mb-1">
            Student Name:
          </label>
          <input
            type="text"
            placeholder="Enter your Full Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <label className="block text-gray-700 font-medium mb-1">
            Student Age:
          </label>
          <input
            type="number"
            placeholder="Enter your Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <label className="block text-gray-700 font-medium mb-1">
            Student Email:
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-200 cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
