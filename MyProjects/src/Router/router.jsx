import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import {PortfolioPage} from "../pages/PortfolioPage";


function AppRoutes() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes><Route path="/" element={<PortfolioPage />} /></Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
