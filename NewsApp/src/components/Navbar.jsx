import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-2 text-white text-2xl font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="34"
            height="34"
            viewBox="0 0 128 128"
          >
            <path
              fill="#F7F7FB"
              d="M109.7,110H18.2c-5.1,0-9.2-4.1-9.2-9.2V22.6c0-2.5,2.1-4.6,4.6-4.6H96c2.5,0,4.6,2.1,4.6,4.6v23.1v55.2C100.6,105.9,104.7,110,109.7,110L109.7,110c5.1,0,9.2-4.1,9.2-9.2V50.2c0-2.5-2.1-4.6-4.6-4.6h-4.6"
            ></path>
            <path
              fill="#DEDFE6"
              d="M23 31.9h63.1c1.7 0 3 1.3 3 3v16.9c0 1.7-1.3 3-3 3H23c-1.7 0-3-1.3-3-3V34.9C20 33.2 21.3 31.9 23 31.9zM109.7 110L109.7 110c5.1 0 9.2-4.1 9.2-9.2V50.2c0-2.5-2.1-4.6-4.6-4.6h-13.8v55.2C100.6 105.9 104.7 110 109.7 110z"
            ></path>
            <path
              fill="#464C55"
              d="M109.7,113H18.2C11.5,113,6,107.5,6,100.8V22.6c0-4.2,3.4-7.6,7.6-7.6H96c4.2,0,7.6,3.4,7.6,7.6v78.3c0,3.4,2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2V50.2c0-0.9-0.7-1.6-1.6-1.6h-4.6c-1.7,0-3-1.3-3-3s1.3-3,3-3h4.6c4.2,0,7.6,3.4,7.6,7.6v50.6C121.9,107.6,116.4,113,109.7,113z M13.6,21c-0.9,0-1.6,0.7-1.6,1.6v78.3c0,3.4,2.8,6.2,6.2,6.2h81.1c-1.1-1.8-1.7-3.9-1.7-6.2V22.6c0-0.9-0.7-1.6-1.6-1.6L13.6,21z"
            ></path>
            <path
              fill="#DEDFE6"
              d="M41.2 72.9H23c-1.7 0-3-1.3-3-3s1.3-3 3-3h18.2c1.7 0 3 1.3 3 3S42.9 72.9 41.2 72.9zM41.2 98.7H23c-1.7 0-3-1.3-3-3s1.3-3 3-3h18.2c1.7 0 3 1.3 3 3S42.9 98.7 41.2 98.7zM41.2 85.7H23c-1.7 0-3-1.3-3-3s1.3-3 3-3h18.2c1.7 0 3 1.3 3 3S42.9 85.7 41.2 85.7z"
            ></path>
            <path
              fill="#464C55"
              d="M86,99.1H58c-1.7,0-3-1.3-3-3V68.6c0-1.7,1.3-3,3-3h28c1.7,0,3,1.3,3,3v27.5C89,97.7,87.7,99.1,86,99.1z M61,93.1h22V71.6H61V93.1z"
            ></path>
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