import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentForm = ({ students, setStudents }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // This checks if the email is already registered
    const existingUser = students.find((student) => student.email === email);
    if (existingUser) {
      alert("Email already registered! Please log in.");
      return;
    }

    if (name && age && email && password) {
      setStudents([...students, { name, age, email, password }]);
      setName("");
      setAge("");
      setEmail("");
      setPassword("");

      alert("Signup successful! You can now log in.");
      navigate("/login");
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
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block text-gray-700 font-medium mb-1">
            Student Password:
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-200 cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
