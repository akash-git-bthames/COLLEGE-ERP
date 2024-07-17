import React from 'react'
import {useTheme} from '../context/ColorContext'


function FirstPageCard({icon,name}) {
 
  const { theme, toggleTheme, color, changeColor } = useTheme();
  
  return (
    <div className="h-56 w-full flex flex-col justify-center items-center border-2 rounded-lg hover:shadow-lg dark:hover:shadow-slate-700 hover:shadow-slate-300  duration-200 hover:cursor-pointer bg-slate-100 dark:bg-gray-800" style={{borderColor:color }}> 
      <div className='dark:text-slate-400'>{icon}</div>
      <div className='text-black text-3xl lg:text-4xl font-bold' style={{color:color}}>{name}</div>
    </div>
  )
}

export default FirstPageCard
