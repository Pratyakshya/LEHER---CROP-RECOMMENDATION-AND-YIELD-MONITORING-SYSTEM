import React, { useState, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MainNavigation from "./components/navbar/MainNavigation";
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import CropProfile from "./pages/CropProfile";
import Sidebar from "./components/sidebar/Sidebar";
import Lowerbar from "./components/lowerbar/Lowerbar";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function App() {
  const [width, height] = useWindowSize();
  console.log(width);
  return (
    <BrowserRouter>
      <MainNavigation />
      <div
        className="container"
        style={{
          height: `${height - 50}px`,
        }}
      >
        <Sidebar />
        <div className="others">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/cropProfile" element={<CropProfile />} />
          </Routes>
          <Lowerbar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
