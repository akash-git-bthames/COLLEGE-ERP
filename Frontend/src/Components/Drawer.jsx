// src/components/Drawer.js
import React, { useState } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import {useTheme} from '../context/ColorContext'


const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {color}=useTheme();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    
      
       
      
      <div
        className={`flex flex-col h-full lg:w-48 w-24 sm:w-32 md:w-40  dark:bg-slate-800 bg-slate-200 border-t-2 border-r-2 border-b-2  border-slate-500 rounded-tr-lg rounded-br-lg duration-200 text-white transform ${
          isOpen ? 'translate-x-0' : 'lg:-translate-x-[70%] md:-translate-x-[65%]  sm:-translate-x-[60%] -translate-x-[50%]'
        } transition-transform duration-200 ease-in-out`} 
      >
       <div className='flex justify-end items-center p-1'>
       <button
          onClick={toggleDrawer}
          className=" p-1 rounded-md bg-slate-300 dark:bg-slate-700  " style={{color: color}}
        >
        {!isOpen?<ArrowForwardOutlinedIcon/>:<ArrowBackOutlinedIcon/>}
          
        </button>
       </div>
        <nav className="font-thin ">
          <ul >
            <li className="p-1 dark:hover:bg-slate-700 border-slate-500 hover:bg-slate-300 hover:cursor-pointer text-slate-950 dark:text-slate-300 lg:text-xl md:text-lg sm:text-sm  text-xs">School Dashboard</li>
            <li className="p-1 dark:hover:bg-slate-700 border-slate-500 hover:bg-slate-300 hover:cursor-pointer text-slate-950 dark:text-slate-300 lg:text-xl md:text-lg sm:text-md text-sm">School Profile</li>
            <li className="p-1 dark:hover:bg-slate-700 border-slate-500 hover:bg-slate-300 hover:cursor-pointer text-slate-950 dark:text-slate-300 lg:text-xl md:text-lg sm:text-md text-sm">New Admission</li>
            <li className="p-1 dark:hover:bg-slate-700 border-slate-500 hover:bg-slate-300 hover:cursor-pointer text-slate-950 dark:text-slate-300 lg:text-xl md:text-lg sm:text-md text-sm">Section Shift</li>
            <li className="p-1 dark:hover:bg-slate-700 border-slate-500 hover:bg-slate-300 hover:cursor-pointer text-slate-950 dark:text-slate-300 lg:text-xl md:text-lg sm:text-md text-sm">Result</li>
            <li className="p-1 dark:hover:bg-slate-700 border-slate-500 hover:bg-slate-300 hover:cursor-pointer text-slate-950 dark:text-slate-300 lg:text-xl md:text-lg sm:text-md text-sm">fee details</li>
            <li className="p-1 dark:hover:bg-slate-700 border-slate-500 hover:bg-slate-300 hover:cursor-pointer text-slate-950 dark:text-slate-300 lg:text-xl md:text-lg sm:text-md text-sm">Progress Activity</li>
            <li className="p-1 dark:hover:bg-slate-700 border-slate-500 hover:bg-slate-300 hover:cursor-pointer text-slate-950 dark:text-slate-300 lg:text-xl md:text-lg sm:text-md text-sm">TC</li>
            <li className="p-1 dark:hover:bg-slate-700 border-slate-500 hover:bg-slate-300 hover:cursor-pointer text-slate-950 dark:text-slate-300 lg:text-xl md:text-lg sm:text-md text-sm">Search Students</li>
            <li className="p-1 dark:hover:bg-slate-700 border-slate-500 hover:bg-slate-300 hover:cursor-pointer text-slate-950 dark:text-slate-300 lg:text-xl md:text-lg sm:text-md text-sm">Question paper</li>
           
            
            
            
          </ul>
        </nav>
      </div>
   
  );
};

export default Drawer;
