import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ setStudentUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleStudentLogin = (event) => {
    event.preventDefault();

    const students = JSON.parse(localStorage.getItem("students")) || [];
    const studentUser = students.find(
      (student) => student.email === email && student.password === password
    );

    if (studentUser) {
      setStudentUser(studentUser);
      localStorage.setItem("studentUser", JSON.stringify(studentUser));
      alert("Login successful");
      navigate("/dashboard");
    } else {
      alert("Oops! Invalid email or password! Please sign up.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleStudentLogin} className="space-y-4">
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
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-200 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
