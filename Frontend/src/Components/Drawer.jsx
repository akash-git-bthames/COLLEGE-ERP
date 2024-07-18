// src/components/Drawer.js
import React, { useState } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    
      
       
      
      <div
        className={`fixed  h-full lg:w-48 w-24 sm:w-32 md:w-40 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : 'sm:-translate-x-[70%]'
        } transition-transform duration-200 ease-in-out`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded"
        >
        {!isOpen?<ArrowForwardOutlinedIcon/>:<ArrowBackOutlinedIcon/>}
          
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
   
  );
};

export default Drawer;
