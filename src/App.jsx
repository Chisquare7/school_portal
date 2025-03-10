import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";

function App() {
  const [students, setStudents] = useState([]);

  return (
    <>
      <Router>
        <NavBar />
        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
