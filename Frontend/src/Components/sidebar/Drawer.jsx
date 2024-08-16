// src/components/Drawer.js
import React, { useState } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import {useTheme} from '../../context/ColorContext'
import SidebarCells from '../Atoms/SidebarCells';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import TransferWithinAStationOutlinedIcon from '@mui/icons-material/TransferWithinAStationOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import RunCircleOutlinedIcon from '@mui/icons-material/RunCircleOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';



const Drawer = ({isOpen,toggleDrawer,setClickCell}) => {
  
 const {color}=useTheme();
 const name =['School Dashboard', 'School Profile', 'New Admission', 'Section Shift','Result','Fee Details','Progress Activity','TC','Search Student','Question Paper']




  return (
    
      
       
      
      <div
        className={`msm:absolute msm:z-10 flex flex-col h-[100vh]    dark:bg-slate-800 bg-slate-200 border-t-2 border-r-2 border-b-2  border-slate-500 rounded-tr-lg rounded-br-lg  text-white 
        
         transition-all transform  duration-200  ${isOpen?'msm:translate-x-auto':'msm:-translate-x-10'} `} 
      >
       <div className='flex justify-end items-center p-1'>
       <button
          onClick={toggleDrawer}
          className=" p-1 rounded-md bg-slate-300 dark:bg-slate-700  " style={{color: color}}
        >
        {!isOpen?<ArrowForwardOutlinedIcon/>:<ArrowBackOutlinedIcon/>}
          
        </button>
       </div>
        <nav className="font-medium">
          <ul >
            <SidebarCells name={name[0]} isOpen={isOpen} icon={<DvrOutlinedIcon/>}   setClickCell={setClickCell}/>
            <SidebarCells name={name[1]} isOpen={isOpen} icon={<MapsHomeWorkOutlinedIcon/>} setClickCell={setClickCell}/>
            <SidebarCells name={name[2]} isOpen={isOpen} icon={<PersonAddAltOutlinedIcon/>} setClickCell={setClickCell}/>
            <SidebarCells name={name[3]} isOpen={isOpen} icon={<TransferWithinAStationOutlinedIcon/>} setClickCell={setClickCell}/>
            <SidebarCells name={name[4]} isOpen={isOpen} icon={<TaskOutlinedIcon/>} setClickCell={setClickCell}/>
            <SidebarCells name={name[5]} isOpen={isOpen} icon={<CurrencyRupeeOutlinedIcon/>} setClickCell={setClickCell}/>
            <SidebarCells name={name[6]} isOpen={isOpen} icon={<RunCircleOutlinedIcon/>} setClickCell={setClickCell}/>
            <SidebarCells name={name[7]} isOpen={isOpen} icon={<ReceiptOutlinedIcon/>} setClickCell={setClickCell}/>
            <SidebarCells name={name[8]} isOpen={isOpen} icon={<PersonSearchOutlinedIcon/>} setClickCell={setClickCell}/>
            <SidebarCells name={name[9]} isOpen={isOpen} icon={<AutoStoriesOutlinedIcon/>} setClickCell={setClickCell}/>
          </ul>
        </nav>
      </div>
   
  );
};

export default Drawer;
