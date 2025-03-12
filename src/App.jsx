import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  const [students, setStudents] = useState(() => {
    return JSON.parse(localStorage.getItem("students")) || [];
  });

  const [studentUser, setStudentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("studentUser")) || null;
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem("studentUser", JSON.stringify(studentUser));
  }, [studentUser]);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home students={students} />} />
          <Route
            path="/login"
            element={<Login setStudentUser={setStudentUser} />}
          />
          <Route
            path="/signup"
            element={<Signup students={students} setStudents={setStudents} />}
          />
          <Route
            path="/dashboard"
            element={
              studentUser ? (
                <Dashboard students={students} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
