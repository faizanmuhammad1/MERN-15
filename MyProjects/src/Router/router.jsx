import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { PortfolioPage } from "../pages/PortfolioPage";

function AppRoutes() {
  const mouseMove = (e) => {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach((eye) => {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let radian = Math.atan2(e.pageX - x, e.pageY - y);
      let angle = (radian * 180) / Math.PI;
      eye.style.transform = `rotate(${-angle}deg)`;
    });
  };

  return (
    <>
      <Router>
        <div onMouseMove={mouseMove}>
          <Navbar />
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default AppRoutes;
