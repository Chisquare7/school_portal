import React from "react";

const Dashboard = ({ students }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Student List</h1>
      <div className="max-w-4xl mx-auto bg-white p-4 shadow-md rounded">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Student Name</th>
              <th className="border p-2">Student Age</th>
              <th className="border p-2">Student Email</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{student.name}</td>
                  <td className="border p-2">{student.age}</td>
                  <td className="border p-2">{student.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="border p-4 text-center text-gray-500"
                >
                  No students registered yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
