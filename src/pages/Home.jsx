import React from "react";
import StudentList from "../components/StudentList";

const Home = ({ students }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <StudentList students={students} />
    </div>
  );
};

export default Home;
