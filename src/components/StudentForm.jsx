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
      navigate("/students");
    }
  };

  return (
    <div>
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">Student Signup</h1>
      </div>
      <form className="space-y-4">
        <label>
          <input
            type="text"
            placeholder="Enter your Full Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <label>
          <input
            type="number"
            placeholder="Enter your Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
