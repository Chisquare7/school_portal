import React from "react";

const StudentList = ({ students }) => {
  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Student List</h2>
      {students.length === 0 ? (
        <p className="text-center text-gray-500">No students registered yet.</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {students.map((student, index) => (
            <li key={index} className="p-3">
              <p className="font-semibold">{student.name}</p>
              <p className="text-sm text-gray-600">Age: {student.age}</p>
              <p className="text-sm text-gray-600">Email: {student.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
