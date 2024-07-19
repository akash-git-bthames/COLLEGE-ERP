// src/components/Drawer.js
import React, { useState } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import {useTheme} from '../context/ColorContext'
import SidebarCells from './SidebarCells';


const Drawer = ({isOpen,toggleDrawer}) => {
  
 const {color}=useTheme();
 const name =['school Dashboard', 'school Profile', 'New Admission', 'Section Shift','Result','fee Details','Progress Activity','TC','Search Student','Question Paper']
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
            <SidebarCells name={name[0]} isOpen={isOpen}/>
            <SidebarCells name={name[1]} isOpen={isOpen}/>
            <SidebarCells name={name[2]} isOpen={isOpen}/>
            <SidebarCells name={name[3]} isOpen={isOpen}/>
            <SidebarCells name={name[4]} isOpen={isOpen}/>
            <SidebarCells name={name[5]} isOpen={isOpen}/>
            <SidebarCells name={name[6]} isOpen={isOpen}/>
            <SidebarCells name={name[7]} isOpen={isOpen}/>
            <SidebarCells name={name[8]} isOpen={isOpen}/>
            <SidebarCells name={name[9]} isOpen={isOpen}/>

           
           
            
            
            
          </ul>
        </nav>
      </div>
   
  );
};

export default Drawer;
