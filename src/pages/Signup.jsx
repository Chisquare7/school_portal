import React from "react";
import StudentForm from "../components/StudentForm_TEMP";

const Signup = ({ students, setStudents }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <StudentForm students={students} setStudents={setStudents} />
    </div>
  );
};

export default Signup;
