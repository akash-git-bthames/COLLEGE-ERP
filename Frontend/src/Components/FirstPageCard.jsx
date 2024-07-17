import React from 'react'
import {useTheme} from '../context/ColorContext'


function FirstPageCard({icon,name}) {
 
  const { theme, toggleTheme, color, changeColor } = useTheme();
  
  return (
    <div className="h-56 w-full flex flex-col justify-center items-center border-2 rounded-lg hover:shadow-lg shadow-black hover:scale-[1.01] duration-200 hover:cursor-pointer bg-slate-100" style={{borderColor:color }}> 
      <div className=''>{icon}</div>
      <div className='text-black text-4xl font-bold' style={{color:color}}>{name}</div>
    </div>
  )
}

export default FirstPageCard
