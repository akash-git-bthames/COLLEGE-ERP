// src/components/Drawer.js
import React, { useState } from 'react';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDrawer}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Toggle Drawer
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
        <nav className="mt-10">
          <ul>
            <li className="p-4 hover:bg-gray-700">Home</li>
            <li className="p-4 hover:bg-gray-700">About</li>
            <li className="p-4 hover:bg-gray-700">Services</li>
            <li className="p-4 hover:bg-gray-700">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;
