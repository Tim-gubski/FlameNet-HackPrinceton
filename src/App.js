import "./App.css";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import okanaganNodeMap from "./nodemaps/okanagan-nodemap.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import ImageMapper from "react-img-mapper";
import Dashboard from "./Dashboard";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

const firebaseConfig = {
  //put stuff in here
};

function App() {
  const app = initializeApp(firebaseConfig);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
