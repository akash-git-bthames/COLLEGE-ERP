import React from 'react';
import {useTheme} from '../context/ColorContext'
function SchoolDashboardCard() {
  const {color} = useTheme();
   const classes = 12;
   const totalBoys = 250;
   const totalGirls = 150;
   const sections = ['A', 'B', 'C', 'D'];

  return (
    <div className='h-full w-full border-2 border-slate-500 shadow-md hover:shadow-slate-400 dark:hover:shadow-slate-600 duration-200 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-200'>
      <div className='h-[50%] lg:text-6xl lg:font-bold  flex justify-center items-center ' style={{color:color}}>{classes}</div>
      <div className='flex h-[20%] justify-evenly items-center lg:text-md lg:font-medium md:text-sm md:font-normal sm:text-xs sm:font-normal text-xs font-thin'>
        <div>Boys : {totalBoys}</div>
        <div>Girls : {totalGirls}</div>
      </div>
      <div className='h-[30%] flex justify-around items-center lg:text-xl md:font-medium md:text-lg sm:text-lg sm:font-medium text-sm font-medium '>
        {sections.map((section, index) => (
          <div key={index} className=' sm:px-2 my-2 px-1  rounded-sm sm:rounded-md bg-slate-100 dark:bg-slate-700 shadow-md shadow-slate-400 dark:shadow-slate-500'>{section}</div>
        ))}
      </div>
    </div>
  );
}

export default SchoolDashboardCard;
