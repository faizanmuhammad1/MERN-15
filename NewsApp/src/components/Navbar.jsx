import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-2 text-white text-2xl font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
          </svg>
          News
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Politics
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Tech
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Entertainment
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Science
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Sports
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            World
          </a>
        </div>
      </div>
    </nav>
  );
}
