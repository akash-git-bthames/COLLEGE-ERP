import React from "react";
import {useTheme} from '../../context/ColorContext'

function SidebarCells({ name, isOpen,icon,setClickCell }) {
  
  const {  color } = useTheme();
  const handleClick = ()=>{
    setClickCell(name);
  }
         
  return (
    <li className={`p-1 dark:hover:bg-slate-700 border-slate-500 hover:bg-slate-300 hover:cursor-pointer text-slate-950 dark:text-slate-300  md:text-lg text-sm  flex gap-1  px-2 sm:px-3 md:px-4 items-center text-nowrap overflow-x-scroll transition-all duration-200 transform`} onClick={handleClick}>
      <div style={{color:color}}>
      {icon}
      </div>
      {isOpen && <div>{name}</div>}
    </li>
  );
}

export default SidebarCells;
