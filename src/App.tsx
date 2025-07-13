"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogoConverter from "./pages/LogoConverter";

export default function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logoConverter" element={<LogoConverter />} />
          </Routes>
      </Router>      
  );
}
