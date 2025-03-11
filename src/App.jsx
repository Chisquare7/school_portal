import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar_TEMP.jsx";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  const [students, setStudents] = useState([]);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home students={students} />} />
          <Route
            path="/signup"
            element={<Signup students={students} setStudents={setStudents} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
