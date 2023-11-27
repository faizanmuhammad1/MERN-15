// src/App.js
import React from "react";
import About from "../components/About";

export function PortfolioPage() {
  return (
    <>
      <div className="flex font-sans text-gray-700 justify-center items-center w-full h-full">
        <About />
      </div>
    </>
  );
}
