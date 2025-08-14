import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import RegisterWorker from "./components/RegisterWorker";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<RegisterWorker />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
