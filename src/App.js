import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import OurTeam from "./components/OurTeam";
import Research from "./components/Research";
import Publications from "./components/Publication";
import News from "./components/News";
import TeachingOutreach from "./components/TeachingOutreach";
import Photos from "./components/Photos";
import AFM from "./components/AFM";
import FM from "./components/FM";
import Login from "./components/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/news" element={<News />} />
        <Route path="/teaching-outreach" element={<TeachingOutreach />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/AFM" element={<AFM />} />
        <Route path="/FM" element={<FM />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
